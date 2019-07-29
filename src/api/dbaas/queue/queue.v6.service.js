angular.module('ovh-api-services').service('OvhApiDbaasQueueV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiDbaasQueueV6');
  const queryCache = $cacheFactory('OvhApiDbaasQueueV6Query');
  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response;
    },
  };

  const queueResource = $resource('/dbaas/queue/:appId', {
    appId: '@appId',
  }, {
    configure: { method: 'POST', url: '/dbaas/queue/:appId/configure', interceptor },
    get: { method: 'GET', cache },
    query: { method: 'GET', cache: queryCache, isArray: true },
    update: { method: 'PUT', interceptor },
  });

  queueResource.resetAllCache = function () {
    queueResource.resetCache();
    queueResource.resetQueryCache();
  };

  queueResource.resetCache = function () {
    cache.removeAll();
  };

  queueResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return queueResource;
});
