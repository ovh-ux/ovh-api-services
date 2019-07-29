angular.module('ovh-api-services').service('OvhApiDbaasLogsArchive', $injector => ({
  v6() {
    return $injector.get('OvhApiDbaasLogsArchiveV6');
  },
  Iceberg() {
    return $injector.get('OvhApiDbaasLogsArchiveIceberg');
  },
}));
