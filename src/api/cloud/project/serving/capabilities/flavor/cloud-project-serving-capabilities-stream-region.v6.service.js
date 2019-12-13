angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectAiServingCapabilitiesFlavorV6', ($resource) => {
    const resource = $resource('/cloud/project/:serviceName/ai/serving/:namespaceId/capabilities/flavor', {
      serviceName: '@serviceName',
      namespaceId: '@namespaceId',
    });

    return resource;
  });
