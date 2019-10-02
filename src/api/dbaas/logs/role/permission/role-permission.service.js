angular.module('ovh-api-services').service('OvhApiDbaasLogsRolePermission', ($injector) => ({
  v6() {
    return $injector.get('OvhApiDbaasLogsRolePermissionV6');
  },
  Iceberg() {
    return $injector.get('OvhApiDbaasLogsRolePermissionIceberg');
  },
}));
