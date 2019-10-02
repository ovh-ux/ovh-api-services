angular.module('ovh-api-services').service('OvhApiDbaasLogsStream', ($injector) => ({
  v6() {
    return $injector.get('OvhApiDbaasLogsStreamV6');
  },
  Iceberg() {
    return $injector.get('OvhApiDbaasLogsStreamIceberg');
  },
  Aapi() {
    return $injector.get('OvhApiDbaasLogsStreamAapi');
  },
}));
