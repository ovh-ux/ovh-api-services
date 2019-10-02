angular.module('ovh-api-services').service('OvhApiKubePublicCloudNode', ($injector) => ({
  v6() {
    return $injector.get('OvhApiKubePublicCloudNodeV6');
  },
}));
