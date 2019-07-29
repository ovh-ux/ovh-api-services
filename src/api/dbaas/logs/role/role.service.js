angular.module('ovh-api-services').service('OvhApiDbaasLogsRole', $injector => ({
  v6() {
    return $injector.get('OvhApiDbaasLogsRoleV6');
  },
  Iceberg() {
    return $injector.get('OvhApiDbaasLogsRoleIceberg');
  },
  Aapi() {
    return $injector.get('OvhApiDbaasLogsRoleAapi');
  },
  Member() {
    return $injector.get('OvhApiDbaasLogsRoleMember');
  },
  Permission() {
    return $injector.get('OvhApiDbaasLogsRolePermission');
  },
}));
