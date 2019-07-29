angular.module('ovh-api-services').service('OvhApiMeAccessRestrictionBackupCode', $injector => ({
  v6() {
    return $injector.get('OvhApiMeAccessRestrictionBackupCodeV6');
  },
}));
