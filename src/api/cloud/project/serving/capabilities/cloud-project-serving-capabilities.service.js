angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectAiServingCapabilities', ($injector) => ({
    Region: () => $injector.get('OvhApiCloudProjectAiServingCapabilitiesRegion'),
    PresetImage: () => $injector.get('OvhApiCloudProjectAiServingCapabilitiesPresetImage'),
    Flavor: () => $injector.get('OvhApiCloudProjectAiServingCapabilitiesFlavor'),
  }));
