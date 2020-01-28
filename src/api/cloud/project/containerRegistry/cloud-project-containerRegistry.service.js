angular.module('ovh-api-services').service('OvhApiCloudProjectContainerRegistry', ($injector) => ({
  v6() {
    return $injector.get('OvhApiCloudProjectContainerRegistryV6');
  },
  Plan() {
    return $injector.get('OvhApiCloudProjectContainerRegistryPlan');
  },
  Users() {
    return $injector.get('OvhApiCloudProjectContainerRegistryUsers');
  },
}));
