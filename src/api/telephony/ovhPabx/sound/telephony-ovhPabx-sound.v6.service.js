angular.module('ovh-api-services').service('OvhApiTelephonyOvhPabxSoundV6', $resource => $resource('/telephony/:billingAccount/ovhPabx/:serviceName/sound/:soundId', {
  billingAccount: '@billingAccount',
  serviceName: '@serviceName',
  soundId: '@soundId',
}, {
  getBatch: {
    method: 'GET',
    isArray: true,
    headers: {
      'X-Ovh-Batch': ',',
    },
  },
}));
