angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectAiServingCapabilitiesPresetImageV6', ($resource) => {
    const resource = $resource('/cloud/project/:serviceName/ai/serving/:namespaceId/capabilities/presetImage', {
      serviceName: '@serviceName',
      namespaceId: '@namespaceId',
    });

    return resource;
  });
