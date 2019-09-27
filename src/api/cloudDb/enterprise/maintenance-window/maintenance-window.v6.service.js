angular.module('ovh-api-services').service('OvhApiCloudDBEnterpriseMaintenanceWindowV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiCloudDBEnterpriseMaintenanceWindowV6');
  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      return response;
    },
  };

  const maintenanceWindowResource = $resource('/cloudDB/enterprise/cluster/:clusterId/maintenanceWindow', {
    clusterId: '@clusterId',
  }, {
    get: { method: 'GET', cache },
    create: { method: 'POST', interceptor },
    update: { method: 'PUT', interceptor },
    delete: { method: 'DELETE', interceptor },
  });

  maintenanceWindowResource.resetAllCache = function () {
    maintenanceWindowResource.resetCache();
    maintenanceWindowResource.resetQueryCache();
  };

  maintenanceWindowResource.resetCache = function () {
    cache.removeAll();
  };

  return maintenanceWindowResource;
});
