angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectAiCapabilitiesServingRegion', ($injector) => ({
    v6: () => $injector.get('OvhApiCloudProjectAiCapabilitiesServingRegionV6'),
  }));
