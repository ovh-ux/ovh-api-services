angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectAiTrainingData', ($injector) => ({
    v6: () => $injector.get('OvhApiCloudProjectAiTrainingDataV6'),
  }));
