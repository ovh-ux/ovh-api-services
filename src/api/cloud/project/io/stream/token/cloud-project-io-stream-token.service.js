angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectIoStreamToken', ($injector) => ({
    v6: () => $injector.get('OvhApiCloudProjectIoStreamTokenV6'),
  }));
