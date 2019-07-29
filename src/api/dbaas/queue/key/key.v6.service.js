angular.module('ovh-api-services').service('OvhApiDbaasQueueKeyV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiDbaasQueueKeyV6');
  const queryCache = $cacheFactory('OvhApiDbaasQueueKeyV6Query');
  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response;
    },
  };

  const keyResource = $resource('/dbaas/queue/:appId/key/:keyId', {
    appId: '@appId',
    keyId: '@keyId',
  }, {
    create: { method: 'POST', interceptor },
    get: { method: 'GET', cache },
    query: { method: 'GET', cache: queryCache, isArray: true },
    update: { method: 'PUT', interceptor },
    changeSecret: { method: 'POST', url: '/dbaas/queue/:appId/key/:keyId/changeSecret' },
    delete: { method: 'DELETE', interceptor },
  });

  keyResource.resetAllCache = function () {
    keyResource.resetCache();
    keyResource.resetQueryCache();
  };

  keyResource.resetCache = function () {
    cache.removeAll();
  };

  keyResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return keyResource;
});
