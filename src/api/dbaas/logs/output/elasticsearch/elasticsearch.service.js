angular.module('ovh-api-services').service('OvhApiDbaasLogsOutputElasticsearchKibana', ($injector) => ({
  Kibana() {
    return $injector.get('OvhApiDbaasLogsOutputElasticsearch');
  },
}));
