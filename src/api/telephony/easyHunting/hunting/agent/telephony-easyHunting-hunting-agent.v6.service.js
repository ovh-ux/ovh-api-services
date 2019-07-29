angular.module('ovh-api-services').service('OvhApiTelephonyEasyHuntingHuntingAgentV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiTelephonyEasyHuntingHuntingAgentV6');
  const queryCache = $cacheFactory('OvhApiTelephonyEasyHuntingHuntingAgentV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.resource;
    },
  };

  const res = $resource('/telephony/:billingAccount/easyHunting/:serviceName/hunting/agent/:agentId', {
    billingAccount: '@billingAccount',
    serviceName: '@serviceName',
    agentId: '@agentId',
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
      cache: queryCache,
      headers: {
        'X-Ovh-Batch': ',',
      },
    },
    create: {
      method: 'POST',
      interceptor,
    },
    change: {
      method: 'PUT',
      interceptor,
    },
    remove: {
      method: 'DELETE',
      interceptor,
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
