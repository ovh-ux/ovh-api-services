angular.module('ovh-api-services').service('OvhApiDbaasLogsTokensV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiDbaasLogsTokensV6');
  const queryCache = $cacheFactory('OvhApiDbaasLogsTokensV6Query');
  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response;
    },
  };

  const tokenResource = $resource('/dbaas/logs/:serviceName/token/:tokenId', {
    serviceName: '@serviceName',
  }, {
    get: { method: 'GET', cache },
    create: { method: 'POST', interceptor },
    remove: { method: 'DELETE', interceptor },
    query: { method: 'GET', isArray: true, cache: queryCache },
  });

  tokenResource.resetAllCache = function () {
    tokenResource.resetCache();
    tokenResource.resetQueryCache();
  };

  tokenResource.resetCache = function () {
    cache.removeAll();
  };

  tokenResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return tokenResource;
});
