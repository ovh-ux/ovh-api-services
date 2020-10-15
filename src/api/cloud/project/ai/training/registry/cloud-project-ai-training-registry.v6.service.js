angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectAiTrainingRegistryV6', ($resource) => $resource('/cloud/project/:serviceName/ai/training/registry/:registryId', {
    serviceName: '@serviceName',
    registryId: '@registryId',
  }));
