angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectDataProcessingMetrics', ($injector) => ({
    iceberg: () => $injector.get('OvhApiCloudProjectDataProcessingMetricsIceberg'),
  }));
