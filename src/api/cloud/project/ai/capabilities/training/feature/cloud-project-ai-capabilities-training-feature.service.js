angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectAiCapabilitiesTrainingFeature', ($injector) => ({
    v6: () => $injector.get('OvhApiCloudProjectAiCapabilitiesTrainingFeatureV6'),
  }));
