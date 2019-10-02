angular.module('ovh-api-services').service('OvhApiIpLoadBalancing', ($injector) => ({
  v6() {
    return $injector.get('OvhApiIpLoadBalancingV6');
  },
  Farm() {
    return $injector.get('OvhApiIpLoadBalancingFarm');
  },
  Frontend() {
    return $injector.get('OvhApiIpLoadBalancingFrontend');
  },
  Ssl() {
    return $injector.get('OvhApiIpLoadBalancingSsl');
  },
  Task() {
    return $injector.get('OvhApiIpLoadBalancingTask');
  },
  Quota() {
    return $injector.get('OvhApiIpLoadBalancingQuota');
  },
  Vrack() {
    return $injector.get('OvhApiIpLoadBalancingVrack');
  },
  Zone() {
    return $injector.get('OvhApiIpLoadBalancingZone');
  },
}));
