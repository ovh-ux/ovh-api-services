angular.module('ovh-api-services').service('OvhApiVrackIp', $injector => ({
  v6() {
    return $injector.get('OvhApiVrackIpV6');
  },
}));
