angular.module('ovh-api-services').service('OvhApiCloudDBEnterpriseRestoreV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiCloudDBEnterpriseRestoreV6');
  const queryCache = $cacheFactory('OvhApiCloudDBEnterpriseRestoreV6Query');
  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response;
    },
  };

  const restoreResource = $resource('/cloudDB/enterprise/cluster/:clusterId/restore/:restoreId', {
    clusterId: '@clusterId',
    restoreId: '@restoreId',
  }, {
    query: { method: 'GET', isArray: true, cache: queryCache },
    get: { method: 'GET', cache },
    create: { method: 'POST', interceptor },
    delete: { method: 'DELETE', interceptor },
  });

  restoreResource.resetAllCache = function () {
    restoreResource.resetCache();
    restoreResource.resetQueryCache();
  };

  restoreResource.resetCache = function () {
    cache.removeAll();
  };

  restoreResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return restoreResource;
});
