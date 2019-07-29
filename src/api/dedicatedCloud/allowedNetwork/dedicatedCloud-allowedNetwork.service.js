angular.module('ovh-api-services').service('OvhApiDedicatedCloudAllowedNetwork', $injector => ({
  v6() {
    return $injector.get('OvhApiDedicatedCloudAllowedNetworkV6');
  },
}));
