angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectAiTraining', ($injector) => ({
    Job: () => $injector.get('OvhApiCloudProjectAiTrainingJob'),
    Registry: () => $injector.get('OvhApiCloudProjectAiTrainingRegistry'),
    Authorization: () => $injector.get('OvhApiCloudProjectAiTrainingAuthorization'),
  }));
