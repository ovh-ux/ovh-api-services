angular.module('ovh-api-services').service('OvhApiTelephonyOvhPabxHuntingAgentV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiTelephonyOvhPabxHuntingAgentV6');
  const queryCache = $cacheFactory('OvhApiTelephonyOvhPabxHuntingAgentV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.resource;
    },
  };

  const res = $resource('/telephony/:billingAccount/ovhPabx/:serviceName/hunting/agent/:agentId', {
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
    addToQueue: {
      url: '/telephony/:billingAccount/ovhPabx/:serviceName/hunting/agent/:agentId/queue',
      method: 'POST',
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
