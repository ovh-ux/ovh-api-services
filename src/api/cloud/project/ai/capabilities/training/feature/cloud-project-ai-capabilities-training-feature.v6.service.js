angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectAiCapabilitiesTrainingFeatureV6', ($resource) => {
    const resource = $resource('/cloud/project/:serviceName/ai/capabilities/training/feature', {
      serviceName: '@serviceName',
    });

    return resource;
  });
