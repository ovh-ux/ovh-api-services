import head from 'lodash/head';
import map from 'lodash/map';
import some from 'lodash/some';

angular.module('ovh-api-services').service('OvhApiCloudProjectConsumptionV6', ($resource) => {
  const cloudProjectConsumptionResource = $resource('/cloud/project/:serviceName/consumption', {
    serviceName: '@serviceName',
  }, {
    query: {
      method: 'GET',
    },
    current: {
      url: '/cloud/project/:serviceName/usage/current',
      method: 'GET',
    },
    bills: {
      url: '/cloud/project/:serviceName/usage/history',
      params: {
        serviceName: '@serviceName',
      },
      queryParams: {
        from: '@from',
        to: '@to',
      },
      method: 'GET',
      isArray: true,
    },
    bill: {
      url: '/cloud/project/:serviceName/usage/history/:usageId',
      params: { usageId: '@usageId' },
      method: 'GET',
    },
  });

  cloudProjectConsumptionResource.getConsumption = function (serviceName, date) {
    if (date.startOf('month').isSame(moment().startOf('month'))) {
      return this.current({ serviceName }).$promise;
    }
    const from = date.startOf('month').subtract(1, 'day').toISOString();
    const to = date.endOf('month').toISOString();
    return cloudProjectConsumptionResource.bills({ serviceName, from, to }).$promise
      .then(resp => map(resp, 'id'))
      .then((billIds) => {
        if (some(billIds)) {
          return cloudProjectConsumptionResource
            .bill({
              serviceName,
              usageId: head(billIds),
            })
            .$promise;
        }
        return null;
      });
  };

  return cloudProjectConsumptionResource;
});
