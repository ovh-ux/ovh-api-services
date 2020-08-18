angular.module('ovh-api-services').service('OvhApiTelephonyConferenceParticipantsAapi', ($resource) => $resource('/telephony/:billingAccount/conference/:serviceName/participants', {
  billingAccount: '@billingAccount',
  serviceName: '@serviceName',
}, {
  query: {
    method: 'GET',
    isArray: true,
    serviceType: 'aapi',
  },
}));
