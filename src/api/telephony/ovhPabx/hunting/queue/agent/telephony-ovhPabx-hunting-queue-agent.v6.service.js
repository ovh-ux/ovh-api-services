angular.module('ovh-api-services').service('OvhApiTelephonyOvhPabxHuntingQueueAgentV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiTelephonyOvhPabxHuntingQueueAgentV6');
  const queryCache = $cacheFactory('OvhApiTelephonyOvhPabxHuntingQueueAgentV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.resource;
    },
  };

  const res = $resource('/telephony/:billingAccount/ovhPabx/:serviceName/hunting/queue/:queueId/agent/:agentId', {
    billingAccount: '@billingAccount',
    serviceName: '@serviceName',
    queueId: '@queueId',
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
      headers: {
        'X-Ovh-Batch': ',',
      },
      cache: queryCache,
    },
    change: {
      method: 'PUT',
      interceptor,
    },
    remove: {
      method: 'DELETE',
      interceptor,
    },
    getLiveStatus: {
      url: '/telephony/:billingAccount/ovhPabx/:serviceName/hunting/queue/:queueId/agent/:agentId/liveStatus',
      method: 'GET',
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
