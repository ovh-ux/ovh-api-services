angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectAiCapabilitiesTrainingRegionGpuV6', ($resource) => $resource('/cloud/project/:serviceName/ai/capabilities/training/region/:region/gpu', {
    serviceName: '@serviceName',
    region: '@region',
  }));
