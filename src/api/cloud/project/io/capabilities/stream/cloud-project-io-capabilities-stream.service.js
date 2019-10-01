angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectIoCapabilitiesStream', $injector => ({
    Region: () => $injector.get('OvhApiCloudProjectIoCapabilitiesStreamRegion'),
  }));
