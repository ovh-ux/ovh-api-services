angular.module('ovh-api-services').service('OvhApiCloudProjectContainerRegistry', $injector => ({
  v6() {
    return $injector.get('OvhApiCloudProjectContainerRegistryV6');
  },
  Users() {
    return $injector.get('OvhApiCloudProjectContainerRegistryUsers');
  },
}));
