angular.module('ovh-api-services').service('OvhApiIpLoadBalancingTask', ($injector) => ({
  v6() {
    return $injector.get('OvhApiIpLoadBalancingTaskV6');
  },
}));
