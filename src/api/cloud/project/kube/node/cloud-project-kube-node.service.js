angular.module('ovh-api-services').service('OvhApiCloudProjectKubeNode', $injector => ({
  v6() {
    return $injector.get('OvhApiCloudProjectKubeNodeV6');
  },
}));
