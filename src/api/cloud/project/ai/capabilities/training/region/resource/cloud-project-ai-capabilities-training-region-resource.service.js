angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectAiCapabilitiesTrainingRegionResource', ($injector) => ({
    v6: () => $injector.get('OvhApiCloudProjectAiCapabilitiesTrainingRegionResourceV6'),
  }));
