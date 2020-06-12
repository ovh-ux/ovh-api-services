angular.module('ovh-api-services').service('OvhApiDbaasLogsRolePermissionV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiDbaasLogsRolePermissionV6');
  const queryCache = $cacheFactory('OvhApiDbaasLogsRolePermissionV6Query');
  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response;
    },
  };

  const permissionResource = $resource('/dbaas/logs/:serviceName/role/:roleId/permission/:permissionId', {
    serviceName: '@serviceName',
    roleId: '@roleId',
    permissionId: '@permissionId',
  }, {
    query: { method: 'GET', cache: queryCache, isArray: true },
    getPermissionDetail: { method: 'GET', cache },
    addAlias: { method: 'POST', interceptor, url: '/dbaas/logs/:serviceName/role/:roleId/permission/alias' },
    addIndex: { method: 'POST', interceptor, url: '/dbaas/logs/:serviceName/role/:roleId/permission/index' },
    addDashboard: { method: 'POST', interceptor, url: '/dbaas/logs/:serviceName/role/:roleId/permission/dashboard' },
    addStream: { method: 'POST', interceptor, url: '/dbaas/logs/:serviceName/role/:roleId/permission/stream' },
    addKibana: { method: 'POST', interceptor, url: '/dbaas/logs/:serviceName/role/:roleId/permission/kibana' },
    update: { method: 'PUT', interceptor },
    remove: { method: 'DELETE', interceptor },
  });

  permissionResource.resetAllCache = function () {
    permissionResource.resetCache();
    permissionResource.resetQueryCache();
  };

  permissionResource.resetCache = function () {
    cache.removeAll();
  };

  permissionResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return permissionResource;
});
