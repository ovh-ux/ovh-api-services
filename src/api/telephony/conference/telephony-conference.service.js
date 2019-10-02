angular.module('ovh-api-services').service('OvhApiTelephonyConference', ($injector) => ({
  v6() {
    return $injector.get('OvhApiTelephonyConferenceV6');
  },
  Participants() {
    return $injector.get('OvhApiTelephonyConferenceParticipants');
  },
  WebAccess() {
    return $injector.get('OvhApiTelephonyConferenceWebAccess');
  },
}));
