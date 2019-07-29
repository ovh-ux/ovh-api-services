angular.module('ovh-api-services').service('OvhApiCloudProjectNetworkPrivateSubnet', $injector => ({
  v6() {
    return $injector.get('OvhApiCloudProjectNetworkPrivateSubnetV6');
  },
}));
