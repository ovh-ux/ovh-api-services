angular.module('ovh-api-services').service('OvhApiTelephonyServiceRepaymentConsumptionV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiTelephonyServiceRepaymentConsumptionV6');
  const queryCache = $cacheFactory('OvhApiTelephonyServiceRepaymentConsumptionV6Query');
  const batchCache = $cacheFactory('OvhApiTelephonyServiceRepaymentConsumptionv6Batch');

  const res = $resource('/telephony/:billingAccount/service/:serviceName/repaymentConsumption/:consumptionId', {
    billingAccount: '@billingAccount',
    serviceName: '@serviceName',
    consumptionId: '@consumptionId',
  }, {
    query: {
      method: 'GET',
      cache: queryCache,
      isArray: true,
    },
    get: {
      method: 'GET',
      cache,
    },
    getBatch: {
      method: 'GET',
      headers: {
        'X-Ovh-Batch': ',',
      },
      cache: batchCache,
      isArray: true,
    },
  });

  res.resetCache = function () {
    cache.removeAll();
  };

  res.resetQueryCache = function () {
    queryCache.removeAll();
  };

  res.resetBatchCache = function () {
    batchCache.removeAll();
  };

  res.resetAllCache = function () {
    this.resetCache();
    this.resetQueryCache();
    this.resetBatchCache();
  };

  return res;
});
