angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectDataProcessingAuthorization', ($injector) => ({
    iceberg: () => $injector.get('OvhApiCloudProjectDataProcessingAuthorizationIceberg'),
  }));
