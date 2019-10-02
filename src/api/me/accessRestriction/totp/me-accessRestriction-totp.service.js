angular.module('ovh-api-services').service('OvhApiMeAccessRestrictionTotp', ($injector) => ({
  v6() {
    return $injector.get('OvhApiMeAccessRestrictionTotpV6');
  },
}));
