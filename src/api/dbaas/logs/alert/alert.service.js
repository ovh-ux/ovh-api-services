angular.module('ovh-api-services').service('OvhApiDbaasLogsAlert', ($injector) => ({
  v6() {
    return $injector.get('OvhApiDbaasLogsAlertV6');
  },
  Iceberg() {
    return $injector.get('OvhApiDbaasLogsAlertIceberg');
  },
}));
