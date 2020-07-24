angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectAiCapabilitiesTrainingRegion', ($injector) => ({
    v6: () => $injector.get('OvhApiCloudProjectAiCapabilitiesTrainingRegionV6'),
  }));
