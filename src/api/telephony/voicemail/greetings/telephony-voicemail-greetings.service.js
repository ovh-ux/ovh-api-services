angular.module('ovh-api-services').service('OvhApiTelephonyVoicemailGreetings', $injector => ({
  v6() {
    return $injector.get('OvhApiTelephonyVoicemailGreetingsV6');
  },
}));
