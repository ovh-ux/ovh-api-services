angular.module('ovh-api-services').service('OvhApiCloudProjectNetworkPublic', ($injector) => ({
  v6() {
    return $injector.get('OvhApiCloudProjectNetworkPublicV6');
  },
}));
