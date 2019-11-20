angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectServingNamespaceToken', ($injector) => ({
    v6: () => $injector.get('OvhApiCloudProjectServingNamespaceTokenV6'),
  }));
