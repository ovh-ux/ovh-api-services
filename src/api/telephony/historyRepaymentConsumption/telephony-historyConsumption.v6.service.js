angular.module('ovh-api-services').service('OvhApiTelephonyHistoryRepaymentConsumptionV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiTelephonyHistoryRepaymentConsumptionV6');

  return $resource('/telephony/:billingAccount/historyRepaymentConsumption/:date', {
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
    create: {
      method: 'POST',
      url: '/telephony/:billingAccount/historyRepaymentConsumption',
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
      url: '/telephony/:billingAccount/historyRepaymentConsumption/:date/document',
    },
    resetCache() {
      cache.removeAll();
    },
  });
});
