angular.module('ovh-api-services').service('OvhApiTelephonyHistoryConsumptionV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiTelephonyHistoryConsumptionV6');

  return $resource('/telephony/:billingAccount/historyConsumption/:date', {
    billingAccount: '@billingAccount',
    date: '@date',
  }, {
    query: {
      method: 'GET',
      isArray: true,
    },
    get: {
      method: 'GET',
      cache,
    },
    getBatch: {
      method: 'GET',
      isArray: true,
      headers: {
        'X-Ovh-Batch': ',',
      },
      cache,
    },
    getFile: {
      method: 'GET',
      url: '/telephony/:billingAccount/historyConsumption/:date/file',
    },
    resetCache() {
      cache.removeAll();
    },
  });
});
