angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectIoCapabilitiesStreamRegion', ($injector) => ({
    v6: () => $injector.get('OvhApiCloudProjectIoCapabilitiesStreamRegionV6'),
  }));
