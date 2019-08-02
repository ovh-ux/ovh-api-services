angular.module('ovh-api-services').service('OvhApiMeTelephonyDefaultIpRestriction', $injector => ({
  v6() {
    return $injector.get('OvhApiMeTelephonyDefaultIpRestrictionV6');
  },
}));
