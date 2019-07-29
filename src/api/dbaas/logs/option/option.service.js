angular.module('ovh-api-services').service('OvhApiDbaasLogsOption', $injector => ({
  v6() {
    return $injector.get('OvhApiDbaasLogsOptionV6');
  },
  Iceberg() {
    return $injector.get('OvhApiDbaasLogsOptionIceberg');
  },
}));
