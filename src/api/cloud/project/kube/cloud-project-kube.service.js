angular.module('ovh-api-services').service('OvhApiCloudProjectKube', ($injector) => ({
  v6() {
    return $injector.get('OvhApiCloudProjectKubeV6');
  },
  Flavors() {
    return $injector.get('OvhApiCloudProjectKubeFlavors');
  },
  Node() {
    return $injector.get('OvhApiCloudProjectKubeNode');
  },
}));
