angular.module('ovh-api-services').service('OvhApiDbaasLogsOutput', ($injector) => ({
  Elasticsearch() {
    return $injector.get('OvhApiDbaasLogsOutputElasticsearch');
  },
}));
