angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectAiCapabilitiesTrainingRegion', ($injector) => ({
    v6: () => $injector.get('OvhApiCloudProjectAiCapabilitiesTrainingRegionV6'),
    Gpu: () => $injector.get('OvhApiCloudProjectAiCapabilitiesTrainingRegionGpu'),
    Resource: () => $injector.get('OvhApiCloudProjectAiCapabilitiesTrainingRegionResource'),
  }));
