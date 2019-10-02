angular.module('ovh-api-services').service('OvhApiDbaasLogsIndex', ($injector) => ({
  v6() {
    return $injector.get('OvhApiDbaasLogsIndexV6');
  },
  Iceberg() {
    return $injector.get('OvhApiDbaasLogsIndexIceberg');
  },
  Aapi() {
    return $injector.get('OvhApiDbaasLogsIndexAapi');
  },
}));
