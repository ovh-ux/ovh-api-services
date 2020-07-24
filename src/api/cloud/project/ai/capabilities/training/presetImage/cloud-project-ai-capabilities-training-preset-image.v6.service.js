angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectAiCapabilitiesTrainingPresetImageV6', ($resource) => {
    const resource = $resource('/cloud/project/:serviceName/ai/capabilities/training/presetImage', {
      serviceName: '@serviceName',
    });

    return resource;
  });
