angular.module('ovh-api-services').service('OvhApiVrackIpLoadBalancing', ($injector) => ({
  v6() {
    return $injector.get('OvhApiVrackIpLoadBalancingV6');
  },
}));
