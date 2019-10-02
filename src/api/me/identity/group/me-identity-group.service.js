angular.module('ovh-api-services').service('OvhApiMeIdentityGroup', ($injector) => ({
  v6() {
    return $injector.get('OvhApiMeIdentityGroupV6');
  },
}));
