angular.module('ovh-api-services').service('OvhApiTelephonyVoicemail', $injector => ({
  v6() {
    return $injector.get('OvhApiTelephonyVoicemailV6');
  },
  Greetings() {
    return $injector.get('OvhApiTelephonyVoicemailGreetings');
  },
  Directories() {
    return $injector.get('OvhApiTelephonyVoicemailDirectories');
  },
}));
