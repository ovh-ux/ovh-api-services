angular.module('ovh-api-services').service('OvhApiCloudDBEnterpriseMaintenanceV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiCloudDBEnterpriseMaintenanceV6');
  const queryCache = $cacheFactory('OvhApiCloudDBEnterpriseMaintenanceV6Query');
  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response;
    },
  };

  const maintenanceResource = $resource('/cloudDB/enterprise/cluster/:clusterId/maintenance/:maintenanceId', {
    clusterId: '@clusterId',
    maintenanceId: '@maintenanceId',
  }, {
    query: { method: 'GET', isArray: true, cache: queryCache },
    get: { method: 'GET', cache },
    delete: { method: 'DELETE', interceptor },
  });

  maintenanceResource.resetAllCache = function () {
    maintenanceResource.resetCache();
    maintenanceResource.resetQueryCache();
  };

  maintenanceResource.resetCache = function () {
    cache.removeAll();
  };

  maintenanceResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return maintenanceResource;
});
