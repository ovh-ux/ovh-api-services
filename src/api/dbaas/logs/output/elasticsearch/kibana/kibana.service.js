angular.module('ovh-api-services').service('OvhApiDbaasLogsOutputElasticsearchKibana', ($injector) => ({
  v6() {
    return $injector.get('OvhApiDbaasLogsOutputElasticsearchKibanaV6');
  },
  Iceberg() {
    return $injector.get('OvhApiDbaasLogsOutputElasticsearchKibanaIceberg');
  },
  Aapi() {
    return $injector.get('OvhApiDbaasLogsOutputElasticsearchKibanaAapi');
  },
}));
