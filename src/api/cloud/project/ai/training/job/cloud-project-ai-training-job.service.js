angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectAiTrainingJob', ($injector) => ({
    v6: () => $injector.get('OvhApiCloudProjectAiTrainingJobV6'),
  }));
