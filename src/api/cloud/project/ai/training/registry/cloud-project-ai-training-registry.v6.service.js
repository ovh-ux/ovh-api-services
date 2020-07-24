angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectAiTrainingRegistryV6', ($resource) => {
    const resource = $resource('/cloud/project/:serviceName/ai/training/registry', {
      serviceName: '@serviceName',
    });
    return resource;
  });
