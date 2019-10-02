angular.module('ovh-api-services').service('OvhApiCloudPCA', ($injector) => ({
  v6() {
    return $injector.get('OvhApiCloudPCAV6');
  },
}));
