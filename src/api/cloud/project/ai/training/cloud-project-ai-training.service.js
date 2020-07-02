angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectAiTraining', ($injector) => ({
    Job: () => $injector.get('OvhApiCloudProjectAiTrainingJob'),
    Data: () => $injector.get('OvhApiCloudProjectAiTrainingData'),
    Authorization: () => $injector.get('OvhApiCloudProjectAiTrainingAuthorization'),
  }));
