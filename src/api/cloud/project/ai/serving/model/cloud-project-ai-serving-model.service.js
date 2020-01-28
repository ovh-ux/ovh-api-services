angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectAiServingModel', ($injector) => ({
    v6: () => $injector.get('OvhApiCloudProjectAiServingModelV6'),
  }));
