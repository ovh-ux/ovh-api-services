angular.module('ovh-api-services').service('OvhApiTelephonyHistoryTollfreeConsumptionV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiTelephonyHistoryTollfreeConsumptionV6');

  return $resource('/telephony/:billingAccount/historyTollfreeConsumption/:date', {
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
    getDocument: {
      method: 'GET',
      url: '/telephony/:billingAccount/historyTollfreeConsumption/:date/document',
    },
    resetCache() {
      cache.removeAll();
    },
  });
});
