angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectAiServingRegistry', ($injector) => ({
    v6: () => $injector.get('OvhApiCloudProjectServingNamespaceRegistryV6'),
  }));
