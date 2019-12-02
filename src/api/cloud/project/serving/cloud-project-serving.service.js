angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectAiServing', ($injector) => ({
    v6: () => $injector.get('OvhApiCloudProjectAiServingV6'),
    Model: () => $injector.get('OvhApiCloudProjectAiServingModel'),
    Token: () => $injector.get('OvhApiCloudProjectAiServingToken'),
    Registry: () => $injector.get('OvhApiCloudProjectAiServingRegistry'),
  }));
