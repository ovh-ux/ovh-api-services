angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectAiServingCapabilitiesRegionV6', ($resource) => {
    const resource = $resource('/cloud/project/:serviceName/ai/serving/:namespaceId/capabilities/region', {
      serviceName: '@serviceName',
    });

    return resource;
  });
