angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectAi', ($injector) => ({
    Serving: () => $injector.get('OvhApiCloudProjectAiServing'),
    Capabilities: () => $injector.get('OvhApiCloudProjectAiCapabilities'),
    Training: () => $injector.get('OvhApiCloudProjectAiTraining'),
  }));
