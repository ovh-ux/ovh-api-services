angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectAiServingRegistryV6', ($resource) => {
    const resource = $resource('/cloud/project/:serviceName/ai/serving/:namespaceId/registry', {
      serviceName: '@serviceName',
      namespaceId: '@namespaceId',
    });
    return resource;
  });
