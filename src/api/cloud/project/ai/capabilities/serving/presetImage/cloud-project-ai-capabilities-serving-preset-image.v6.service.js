angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectAiCapabilitiesServingPresetImageV6', ($resource) => {
    const resource = $resource('/cloud/project/:serviceName/ai/capabilities/serving/presetImage', {
      serviceName: '@serviceName',
    });

    return resource;
  });
