angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectAiCapabilitiesServingFlavor', ($injector) => ({
    v6: () => $injector.get('OvhApiCloudProjectAiCapabilitiesServingFlavorV6'),
  }));
