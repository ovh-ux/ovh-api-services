angular.module('ovh-api-services').service('OvhApiMeAccessRestriction', $injector => ({
  BackupCode() {
    return $injector.get('OvhApiMeAccessRestrictionBackupCode');
  },
  Ip() {
    return $injector.get('OvhApiMeAccessRestrictionIp');
  },
  v6() {
    return $injector.get('OvhApiMeAccessRestrictionV6');
  },
  Sms() {
    return $injector.get('OvhApiMeAccessRestrictionSms');
  },
  Totp() {
    return $injector.get('OvhApiMeAccessRestrictionTotp');
  },
  U2f() {
    return $injector.get('OvhApiMeAccessRestrictionU2f');
  },
}));
