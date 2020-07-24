angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectAiCapabilitiesTrainingRegionV6', ($resource) => {
    const resource = $resource('/cloud/project/:serviceName/ai/capabilities/training/region', {
      serviceName: '@serviceName',
    });

    return resource;
  });
