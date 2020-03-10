angular.module('ovh-api-services').service('OvhApiCloudProjectLoadBalancer', ($injector) => ({
  v6() {
    return $injector.get('OvhApiCloudProjectLoadBalancerV6');
  },
}));
