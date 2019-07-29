angular.module('ovh-api-services').service('OvhApiTelephonyConferenceParticipants', $injector => ({
  v6() {
    return $injector.get('OvhApiTelephonyConferenceParticipantsV6');
  },
  Aapi() {
    return $injector.get('OvhApiTelephonyConferenceParticipantsAapi');
  },
}));
