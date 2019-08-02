angular.module('ovh-api-services').service('OvhApiCloudProjectAggregateAapi', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiCloudProjectAggregateAapi');

  const cloudProjectAggregateResource = $resource('/cloud/project/:serviceName/aggregate', {
    serviceName: '@serviceName',
  }, {
    get: {
      method: 'GET',
      isArray: false,
      serviceType: 'aapi',
    },
  });

  cloudProjectAggregateResource.resetAllCache = function () {
    cloudProjectAggregateResource.resetCache();
  };

  cloudProjectAggregateResource.resetCache = function () {
    cache.removeAll();
  };

  return cloudProjectAggregateResource;
});
