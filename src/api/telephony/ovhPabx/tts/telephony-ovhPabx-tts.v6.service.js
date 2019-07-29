angular.module('ovh-api-services').service('OvhApiTelephonyOvhPabxTtsV6', $resource => $resource('/telephony/:billingAccount/ovhPabx/:serviceName/tts/:id', {
  billingAccount: '@billingAccount',
  serviceName: '@serviceName',
  id: '@id',
}, {
  getBatch: {
    method: 'GET',
    isArray: true,
    headers: {
      'X-Ovh-Batch': ',',
    },
  },
  save: {
    method: 'PUT',
    isArray: false,
  },
  create: {
    method: 'POST',
    isArray: false,
  },
}));
