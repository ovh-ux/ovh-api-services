angular.module('ovh-api-services').service('OvhApiDbaasLogsInput', ($injector) => ({
  v6() {
    return $injector.get('OvhApiDbaasLogsInputV6');
  },
  Iceberg() {
    return $injector.get('OvhApiDbaasLogsInputIceberg');
  },
  Aapi() {
    return $injector.get('OvhApiDbaasLogsInputAapi');
  },
}));
