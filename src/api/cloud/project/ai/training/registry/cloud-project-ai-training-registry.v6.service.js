angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectAiTrainingRegistryV6', ($resource) => $resource('/cloud/project/:serviceName/ai/registry/:registryId', {
    serviceName: '@serviceName',
    registryId: '@registryId',
  }));
