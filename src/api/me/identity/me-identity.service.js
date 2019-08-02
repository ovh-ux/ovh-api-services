angular.module('ovh-api-services').service('OvhApiMeIdentity', $injector => ({
  Group() {
    return $injector.get('OvhApiMeIdentityGroup');
  },
  User() {
    return $injector.get('OvhApiMeIdentityUser');
  },
}));
