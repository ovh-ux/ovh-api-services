angular.module('ovh-api-services').service('OvhApiIpLoadBalancingSsl', $injector => ({
  v6() {
    return $injector.get('OvhApiIpLoadBalancingSslV6');
  },
}));
