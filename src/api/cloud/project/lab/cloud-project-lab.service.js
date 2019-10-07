angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectLab', ($injector) => ({
    v6: () => $injector.get('OvhApiCloudProjectLabV6'),
  }));
