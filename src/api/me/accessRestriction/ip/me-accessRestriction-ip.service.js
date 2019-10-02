angular.module('ovh-api-services').service('OvhApiMeAccessRestrictionIp', ($injector) => ({
  v6() {
    return $injector.get('OvhApiMeAccessRestrictionIpV6');
  },
}));
