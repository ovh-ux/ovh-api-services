angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectAiServingMetrics', ($injector) => ({
    v6: () => $injector.get('OvhApiCloudProjectAiServingMetricsV6'),
  }));
