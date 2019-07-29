angular.module('ovh-api-services').service('OvhApiDbaasLogsOperation', $injector => ({
  v6() {
    return $injector.get('OvhApiDbaasLogsOperationV6');
  },
  Iceberg() {
    return $injector.get('OvhApiDbaasLogsOperationIceberg');
  },
}));
