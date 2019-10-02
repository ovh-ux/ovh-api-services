angular.module('ovh-api-services').service('OvhApiDbaasLogsAlias', ($injector) => ({
  v6() {
    return $injector.get('OvhApiDbaasLogsAliasV6');
  },
  Iceberg() {
    return $injector.get('OvhApiDbaasLogsAliasIceberg');
  },
  Aapi() {
    return $injector.get('OvhApiDbaasLogsAliasAapi');
  },
}));
