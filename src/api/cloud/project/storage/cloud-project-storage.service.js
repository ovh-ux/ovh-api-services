angular.module('ovh-api-services').service('OvhApiCloudProjectStorage', $injector => ({
  v6() {
    return $injector.get('OvhApiCloudProjectStorageV6');
  },
  Aapi() {
    return $injector.get('OvhApiCloudProjectStorageAapi');
  },
}));
