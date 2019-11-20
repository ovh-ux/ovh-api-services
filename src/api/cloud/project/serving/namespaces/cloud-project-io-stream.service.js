angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectServingNamespace', ($injector) => ({
    v6: () => $injector.get('OvhApiCloudProjectServingNamespaceV6'),
    Model: () => $injector.get('OvhApiCloudProjectServingNamespaceModel'),
    Token: () => $injector.get('OvhApiCloudProjectServingNamespaceToken'),
    Registry: () => $injector.get('OvhApiCloudProjectServingNamespaceRegistry'),
  }));
