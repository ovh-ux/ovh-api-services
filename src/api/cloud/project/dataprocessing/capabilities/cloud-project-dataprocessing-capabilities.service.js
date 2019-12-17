angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectDataProcessingCapabilities', ($injector) => ({
    iceberg: () => $injector.get('OvhApiCloudProjectDataProcessingCapabilitiesIceberg'),
  }));
