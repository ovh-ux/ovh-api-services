angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectAiCapabilitiesTraining', ($injector) => ({
    Region: () => $injector.get('OvhApiCloudProjectAiCapabilitiesTrainingRegion'),
    PresetImage: () => $injector.get('OvhApiCloudProjectAiCapabilitiesTrainingPresetImage'),
    Feature: () => $injector.get('OvhApiCloudProjectAiCapabilitiesTrainingFeature'),
  }));
