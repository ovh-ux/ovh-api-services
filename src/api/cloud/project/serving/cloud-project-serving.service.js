angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectServing', ($injector) => ({
    Namespace: () => $injector.get('OvhApiCloudProjectServingNamespace'),
  }));
