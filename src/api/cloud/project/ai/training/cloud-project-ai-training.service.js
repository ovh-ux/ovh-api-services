angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectAiTraining', ($injector) => ({
    Job: () => $injector.get('OvhApiCloudProjectAiTrainingJob'),
    Data: () => $injector.get('OvhApiCloudProjectAiTrainingData'),
    Registry: () => $injector.get('OvhApiCloudProjectAiTrainingRegistry'),
    Authorization: () => $injector.get('OvhApiCloudProjectAiTrainingAuthorization'),
  }));
