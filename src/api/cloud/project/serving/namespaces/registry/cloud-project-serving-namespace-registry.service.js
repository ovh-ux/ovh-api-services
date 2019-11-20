angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectServingNamespaceRegistry', ($injector) => ({
    v6: () => $injector.get('OvhApiCloudProjectServingNamespaceRegistryV6'),
  }));
