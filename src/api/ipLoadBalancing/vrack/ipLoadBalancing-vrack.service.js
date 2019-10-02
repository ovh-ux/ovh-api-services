angular.module('ovh-api-services').service('OvhApiIpLoadBalancingVrack', ($injector) => ({
  v6() {
    return $injector.get('OvhApiIpLoadBalancingVrackV6');
  },
}));
