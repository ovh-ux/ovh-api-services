angular.module('ovh-api-services').service('OvhApiTelephonyConferenceWebAccess', $injector => ({
  v6() {
    return $injector.get('OvhApiTelephonyConferenceWebAccessV6');
  },
}));
