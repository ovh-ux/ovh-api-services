angular.module('ovh-api-services').service('OvhApiKubePublicCloud', ($injector) => ({
  Node() {
    return $injector.get('OvhApiKubePublicCloudNode');
  },
  Project() {
    return $injector.get('OvhApiKubePublicCloudProject');
  },
}));
