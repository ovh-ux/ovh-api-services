angular.module('ovh-api-services').service('OvhApiMeIdentityUser', $injector => ({
  v6() {
    return $injector.get('OvhApiMeIdentityUserV6');
  },
}));
