angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectAiCapabilitiesServing', ($injector) => ({
    Region: () => $injector.get('OvhApiCloudProjectAiCapabilitiesServingRegion'),
    Feature: () => $injector.get('OvhApiCloudProjectAiCapabilitiesServingFeature'),
    PresetImage: () => $injector.get('OvhApiCloudProjectAiCapabilitiesServingPresetImage'),
    Flavor: () => $injector.get('OvhApiCloudProjectAiCapabilitiesServingFlavor'),
  }));
