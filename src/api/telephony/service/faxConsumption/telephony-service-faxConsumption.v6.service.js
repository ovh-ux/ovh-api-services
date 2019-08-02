angular.module('ovh-api-services').service('OvhApiTelephonyServiceFaxConsumptionV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiTelephonyServiceFaxConsumptionV6');
  const queryCache = $cacheFactory('OvhApiTelephonyServiceFaxConsumptionV6Query');

  const faxConsumption = $resource('/telephony/:billingAccount/service/:serviceName/faxConsumption/:consumptionId', {
    billingAccount: '@billingAccount',
    serviceName: '@serviceName',
    consumptionId: '@consumptionId',
  }, {
    get: {
      method: 'GET',
      cache,
    },
    getBatch: {
      method: 'GET',
      isArray: true,
      cache: queryCache,
      headers: {
        'X-Ovh-Batch': ',',
      },
    },
    query: {
      method: 'GET',
      cache: queryCache,
      isArray: true,
    },
  });

  faxConsumption.resetCache = function () {
    cache.removeAll();
  };

  faxConsumption.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return faxConsumption;
});
