angular.module('ovh-api-services').service('OvhApiIpDelegation', ($injector) => ({
  v6() {
    return $injector.get('OvhApiIpDelegationV6');
  },
}));
