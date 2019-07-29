angular.module('ovh-api-services').service('OvhApiDbaasLogsRolePermissionIceberg', (iceberg) => {
  const permissionResource = iceberg('/dbaas/logs/:serviceName/role/:roleId/permission/:permissionId', {
    serviceName: '@serviceName',
    roleId: '@roleId',
    permissionId: '@permissionId',
  }, {
    query: { method: 'GET', isArray: true },
    getPermissionDetail: { method: 'GET' },
    addAlias: { method: 'POST', url: '/dbaas/logs/:serviceName/role/:roleId/permission/alias' },
    addIndex: { method: 'POST', url: '/dbaas/logs/:serviceName/role/:roleId/permission/index' },
    addDashboard: { method: 'POST', url: '/dbaas/logs/:serviceName/role/:roleId/permission/dashboard' },
    addStream: { method: 'POST', url: '/dbaas/logs/:serviceName/role/:roleId/permission/stream' },
    update: { method: 'PUT' },
    remove: { method: 'DELETE' },
  });

  return permissionResource;
});
