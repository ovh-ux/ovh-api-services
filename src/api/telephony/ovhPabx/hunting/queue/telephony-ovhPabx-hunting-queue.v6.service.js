angular.module('ovh-api-services').service('OvhApiTelephonyOvhPabxHuntingQueueV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiTelephonyOvhPabxHuntingQueueV6');
  const queryCache = $cacheFactory('OvhApiTelephonyOvhPabxHuntingQueueV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.resource;
    },
  };

  const res = $resource('/telephony/:billingAccount/ovhPabx/:serviceName/hunting/queue/:queueId', {
    billingAccount: '@billingAccount',
    serviceName: '@serviceName',
    queueId: '@queueId',
  }, {
    query: {
      method: 'GET',
      isArray: true,
      cache: queryCache,
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
    },
    change: {
      method: 'PUT',
      interceptor,
    },
    create: {
      method: 'POST',
      interceptor,
    },
    remove: {
      method: 'DELETE',
      interceptor,
    },
    getLiveStatistics: {
      method: 'GET',
      url: '/telephony/:billingAccount/ovhPabx/:serviceName/hunting/queue/:queueId/liveStatistics',
    },
  });

  res.resetCache = function () {
    cache.removeAll();
  };

  res.resetQueryCache = function () {
    queryCache.removeAll();
  };

  res.resetAllCache = function () {
    this.resetCache();
    this.resetQueryCache();
  };

  return res;
});
