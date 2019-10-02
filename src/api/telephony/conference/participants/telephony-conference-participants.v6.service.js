angular.module('ovh-api-services').service('OvhApiTelephonyConferenceParticipantsV6', ($resource) => $resource('/telephony/:billingAccount/conference/:serviceName/participants/:id', {
  billingAccount: '@billingAccount',
  serviceName: '@serviceName',
  id: '@id',
}, {
  mute: {
    method: 'POST',
    url: '/telephony/:billingAccount/conference/:serviceName/participants/:id/mute',
    isArray: false,
  },
  unmute: {
    method: 'POST',
    url: '/telephony/:billingAccount/conference/:serviceName/participants/:id/unmute',
    isArray: false,
  },
  kick: {
    method: 'POST',
    url: '/telephony/:billingAccount/conference/:serviceName/participants/:id/kick',
    isArray: false,
  },
  deaf: {
    method: 'POST',
    url: '/telephony/:billingAccount/conference/:serviceName/participants/:id/deaf',
    isArray: false,
  },
  undeaf: {
    method: 'POST',
    url: '/telephony/:billingAccount/conference/:serviceName/participants/:id/undeaf',
    isArray: false,
  },
  energy: {
    method: 'POST',
    url: '/telephony/:billingAccount/conference/:serviceName/participants/:id/energy',
    isArray: false,
  },
}));
