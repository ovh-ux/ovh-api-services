angular.module('ovh-api-services').service('OvhApiTelephonyEasyHuntingHuntingQueueV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiTelephonyEasyHuntingHuntingQueueV6');
  const queryCache = $cacheFactory('OvhApiTelephonyEasyHuntingHuntingQueueV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.resource;
    },
  };

  const res = $resource('/telephony/:billingAccount/easyHunting/:serviceName/hunting/queue/:queueId', {
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
    change: {
      method: 'PUT',
      interceptor,
    },
    getLiveStatistics: {
      method: 'GET',
      url: '/telephony/:billingAccount/easyHunting/:serviceName/hunting/queue/:queueId/liveStatistics',
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
