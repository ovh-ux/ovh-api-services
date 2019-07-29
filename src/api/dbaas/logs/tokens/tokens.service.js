angular.module('ovh-api-services').service('OvhApiDbaasLogsTokens', $injector => ({
  v6() {
    return $injector.get('OvhApiDbaasLogsTokensV6');
  },
  Iceberg() {
    return $injector.get('OvhApiDbaasLogsTokensIceberg');
  },
}));
