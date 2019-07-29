angular.module('ovh-api-services').service('OvhApiDbaasLogsIndexV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiDbaasLogsIndexV6');
  const queryCache = $cacheFactory('OvhApiDbaasLogsIndexV6Query');
  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response;
    },
  };

  const index = $resource('/dbaas/logs/:serviceName/output/elasticsearch/index/:indexId', {
    serviceName: '@serviceName',
    indexId: '@indexId',
  }, {
    query: { method: 'GET', cache: queryCache, isArray: true },
    get: { method: 'GET', cache },
    post: { method: 'POST', interceptor },
    put: { method: 'PUT', interceptor },
    delete: { method: 'DELETE', interceptor },
  });

  index.resetAllCache = function () {
    index.resetCache();
    index.resetQueryCache();
  };

  index.resetCache = function () {
    cache.removeAll();
  };

  index.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return index;
});
