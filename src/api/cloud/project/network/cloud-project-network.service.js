angular.module('ovh-api-services').service('OvhApiCloudProjectNetwork', $injector => ({
  Private() {
    return $injector.get('OvhApiCloudProjectNetworkPrivate');
  },
  Public() {
    return $injector.get('OvhApiCloudProjectNetworkPublic');
  },
}));
