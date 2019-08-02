angular.module('ovh-api-services').service('OvhApiMeTelephony', $injector => ({
  DefaultIpRestriction() {
    return $injector.get('OvhApiMeTelephonyDefaultIpRestriction');
  },
  Settings() {
    return $injector.get('OvhApiMeTelephonySettings');
  },
}));
