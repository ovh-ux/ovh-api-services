angular.module('ovh-api-services').service('OvhApiDbaasLogsUser', $injector => ({
  v6() {
    return $injector.get('OvhApiDbaasLogsUserV6');
  },
  Iceberg() {
    return $injector.get('OvhApiDbaasLogsUserIceberg');
  },
}));
