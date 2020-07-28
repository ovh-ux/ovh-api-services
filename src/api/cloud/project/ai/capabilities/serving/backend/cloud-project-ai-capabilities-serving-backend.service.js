angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectAiCapabilitiesServingBackend', ($injector) => ({
    v6: () => $injector.get('OvhApiCloudProjectAiCapabilitiesServingBackendV6'),
  }));
