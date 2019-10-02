angular.module('ovh-api-services').service('OvhApiIp', ($injector) => ({
  v6() {
    return $injector.get('OvhApiIpV6');
  },
  Delegation() {
    return $injector.get('OvhApiIpDelegation');
  },
  Reverse() {
    return $injector.get('OvhApiIpReverse');
  },
}));
