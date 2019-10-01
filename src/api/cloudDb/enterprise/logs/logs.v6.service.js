angular.module('ovh-api-services').service('OvhApiCloudDBEnterpriseLogsV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiCloudDBEnterpriseLogsV6');
  const queryCache = $cacheFactory('OvhApiCloudDBEnterpriseLogsV6Query');
  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response;
    },
  };

  const logsResource = $resource('/cloudDB/enterprise/cluster/:clusterId/logs/:logsId', {
    clusterId: '@clusterId',
    logsId: '@logsId',
  }, {
    query: { method: 'GET', isArray: true, cache: queryCache },
    get: { method: 'GET', cache },
    grantAccess: { method: 'POST', interceptor },
    revokeAccess: { method: 'DELETE', interceptor },
  });

  logsResource.resetAllCache = function () {
    logsResource.resetCache();
    logsResource.resetQueryCache();
  };

  logsResource.resetCache = function () {
    cache.removeAll();
  };

  logsResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return logsResource;
});
