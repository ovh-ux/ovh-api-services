angular.module('ovh-api-services').service('OvhApiDbaasLogsOptionV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiDbaasLogsOptionV6');
  const queryCache = $cacheFactory('OvhApiDbaasLogsOptionV6Query');
  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response;
    },
  };

  const optionResource = $resource('/dbaas/logs/:serviceName/option/{optionId}', {
    serviceName: '@serviceName',
    optionId: '@optionId',
  }, {
    get: { method: 'GET', cache },
    query: { method: 'GET', isArray: true, cache: queryCache },
    terminate: { method: 'POST', interceptor, url: '/dbaas/logs/:serviceName/option/:optionId/terminate' },
  });

  optionResource.resetAllCache = function () {
    optionResource.resetCache();
    optionResource.resetQueryCache();
  };

  optionResource.resetCache = function () {
    cache.removeAll();
  };

  optionResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return optionResource;
});
