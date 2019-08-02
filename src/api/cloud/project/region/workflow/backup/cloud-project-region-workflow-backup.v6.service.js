angular.module('ovh-api-services').service('OvhApiCloudProjectRegionWorkflowBackupV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiCloudProjectRegionWorkflowBackupV6');
  const queryCache = $cacheFactory('OvhApiCloudProjectRegionWorkflowBackupV6Query');

  const interceptor = {
    response(response) {
      queryCache.removeAll();
      return response.data;
    },
  };

  const backup = $resource('/cloud/project/:serviceName/region/:regionName/workflow/backup/:backupWorkflowId', {
    serviceName: '@serviceName',
    regionName: '@regionName',
    backupWorkflowId: '@backupWorkflowId',
  }, {
    query: { method: 'GET', cache: queryCache, isArray: true },
    get: { method: 'GET', cache },
    save: { method: 'POST', interceptor },
    delete: { method: 'DELETE', interceptor },
  });

  backup.resetCache = function () {
    cache.removeAll();
  };

  backup.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return backup;
});
