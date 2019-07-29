angular.module('ovh-api-services').service('OvhApiCloudProjectNetworkPrivate', $injector => ({
  v6() {
    return $injector.get('OvhApiCloudProjectNetworkPrivateV6');
  },
  Subnet() {
    return $injector.get('OvhApiCloudProjectNetworkPrivateSubnet');
  },
}));
