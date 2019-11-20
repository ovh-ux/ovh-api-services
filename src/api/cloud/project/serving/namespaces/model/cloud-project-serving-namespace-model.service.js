angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectServingNamespaceModel', ($injector) => ({
    v6: () => $injector.get('OvhApiCloudProjectServingNamespaceModelV6'),
  }));
