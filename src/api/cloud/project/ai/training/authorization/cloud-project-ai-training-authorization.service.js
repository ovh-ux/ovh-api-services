angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectAiTrainingAuthorization', ($injector) => ({
    v6: () => $injector.get('OvhApiCloudProjectAiTrainingAuthorizationV6'),
  }));
