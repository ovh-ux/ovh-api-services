angular.module('ovh-api-services').service('OvhApiIpLoadBalancingQuota', ($injector) => ({
  v6() {
    return $injector.get('OvhApiIpLoadBalancingQuotaV6');
  },
}));
