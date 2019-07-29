angular.module('ovh-api-services').service('OvhApiTelephonyEasyHuntingSound', $injector => ({
  v6() {
    return $injector.get('OvhApiTelephonyEasyHuntingSoundV6');
  },
}));
