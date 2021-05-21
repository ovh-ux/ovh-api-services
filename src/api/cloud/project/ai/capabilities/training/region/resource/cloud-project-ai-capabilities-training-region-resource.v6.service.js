angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectAiCapabilitiesTrainingRegionResourceV6', ($resource) => $resource('/cloud/project/:serviceName/ai/capabilities/region/:region/resource', {
    serviceName: '@serviceName',
    region: '@region',
  }));
