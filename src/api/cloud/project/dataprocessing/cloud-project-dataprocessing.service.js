angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectDataProcessing', ($injector) => ({
    v6: () => $injector.get('OvhApiCloudProjectDataProcessingV6'),
    Capabilities: () => $injector.get('OvhApiCloudProjectDataProcessingCapabilities'),
    Authorization: () => $injector.get('OvhApiCloudProjectDataProcessingAuthorization'),
    Jobs: () => $injector.get('OvhApiCloudProjectDataProcessingJobs'),
    Metrics: () => $injector.get('OvhApiCloudProjectDataProcessingMetrics'),
  }));
