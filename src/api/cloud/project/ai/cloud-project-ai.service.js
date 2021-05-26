angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectAi', ($injector) => ({
    Serving: () => $injector.get('OvhApiCloudProjectAiServing'),
    Notebook: () => $injector.get('OvhApiCloudProjectAiNotebook'),
    Capabilities: () => $injector.get('OvhApiCloudProjectAiCapabilities'),
    Training: () => $injector.get('OvhApiCloudProjectAiTraining'),
  }));
