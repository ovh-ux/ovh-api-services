angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectIoCapabilities', $injector => ({
    Stream: () => $injector.get('OvhApiCloudProjectIoCapabilitiesStream'),
  }));
