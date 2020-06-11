angular.module('ovh-api-services').service('OvhApiDbaasLogsOutputElasticsearch', ($injector) => ({
  Kibana() {
    return $injector.get('OvhApiDbaasLogsOutputElasticsearchKibana');
  },
}));
