angular.module('ovh-api-services').service('OvhApiMeAccessRestrictionSms', $injector => ({
  v6() {
    return $injector.get('OvhApiMeAccessRestrictionSmsV6');
  },
}));
