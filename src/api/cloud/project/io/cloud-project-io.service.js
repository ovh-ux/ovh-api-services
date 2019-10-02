angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectIo', ($injector) => ({
    Capabilities: () => $injector.get('OvhApiCloudProjectIoCapabilities'),
    Stream: () => $injector.get('OvhApiCloudProjectIoStream'),
  }));
