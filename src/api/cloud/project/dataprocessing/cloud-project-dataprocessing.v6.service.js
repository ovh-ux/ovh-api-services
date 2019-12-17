angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectDataProcessingV6', ($resource) => $resource('/cloud/project/:serviceName/dataprocessing', {
    serviceName: '@serviceName',
  }));
