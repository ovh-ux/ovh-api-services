angular.module('ovh-api-services').service('OvhApiIpLoadBalancingZone', $injector => ({
  v6() {
    return $injector.get('OvhApiIpLoadBalancingZoneV6');
  },
}));
