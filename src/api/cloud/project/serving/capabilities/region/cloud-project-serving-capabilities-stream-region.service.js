angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectAiServingCapabilitiesRegion', ($injector) => ({
    v6: () => $injector.get('OvhApiCloudProjectAiServingCapabilitiesRegionV6'),
  }));
