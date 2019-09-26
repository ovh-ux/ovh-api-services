angular.module('ovh-api-services').service('OvhApiCloudDBEnterpriseBackupV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiCloudDBEnterpriseBackupV6');
  const queryCache = $cacheFactory('OvhApiCloudDBEnterpriseBackupV6Query');
  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response;
    },
  };

  const backupResource = $resource('/cloudDB/enterprise/cluster/:clusterId/backup/:backupId', {
    clusterId: '@clusterId',
    backupId: '@backupId',
  }, {
    query: { method: 'GET', isArray: true, cache: queryCache },
    get: { method: 'GET', cache },
    create: { method: 'POST', interceptor },
    delete: { method: 'DELETE', interceptor },
  });

  backupResource.resetAllCache = function () {
    backupResource.resetCache();
    backupResource.resetQueryCache();
  };

  backupResource.resetCache = function () {
    cache.removeAll();
  };

  backupResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return backupResource;
});
