angular.module('ovh-api-services').service('OvhApiDbaasLogsRoleMember', $injector => ({
  v6() {
    return $injector.get('OvhApiDbaasLogsRoleMemberV6');
  },
  Iceberg() {
    return $injector.get('OvhApiDbaasLogsRoleMemberIceberg');
  },
}));
