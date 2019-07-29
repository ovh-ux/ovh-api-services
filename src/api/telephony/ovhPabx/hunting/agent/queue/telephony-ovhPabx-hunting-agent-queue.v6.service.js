angular.module('ovh-api-services').service('OvhApiTelephonyOvhPabxHuntingAgentQueueV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiTelephonyOvhPabxHuntingAgentQueueV6');
  const queryCache = $cacheFactory('OvhApiTelephonyOvhPabxHuntingAgentQueueV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.resource;
    },
  };

  const res = $resource('/telephony/:billingAccount/ovhPabx/:serviceName/hunting/agent/:agentId/queue/:queueId', {
    billingAccount: '@billingAccount',
    serviceName: '@serviceName',
    agentId: '@agentId',
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
    create: {
      url: '/telephony/:billingAccount/ovhPabx/:serviceName/hunting/agent/:agentId/queue',
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
