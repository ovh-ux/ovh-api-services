angular.module('ovh-api-services').service('OvhApiCloudProjectContainerRegistryUsers', $injector => ({
  v6() {
    return $injector.get('OvhApiCloudProjectContainerRegistryUsersV6');
  },
}));
