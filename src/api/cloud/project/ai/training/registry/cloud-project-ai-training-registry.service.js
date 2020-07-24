angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectAiTrainingRegistry', ($injector) => ({
    v6: () => $injector.get('OvhApiCloudProjectAiTrainingRegistryV6'),
  }));
