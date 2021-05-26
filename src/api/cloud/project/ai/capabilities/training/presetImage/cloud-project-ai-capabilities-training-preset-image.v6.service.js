angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectAiCapabilitiesTrainingPresetImageV6', ($resource) => {
    const resource = $resource('/cloud/project/:serviceName/ai/job/capabilities/presetImage', {
      serviceName: '@serviceName',
    });

    return resource;
  });
