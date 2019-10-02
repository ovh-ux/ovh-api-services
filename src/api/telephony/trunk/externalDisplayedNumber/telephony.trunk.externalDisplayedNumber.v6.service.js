
angular.module('ovh-api-services').service('OvhApiTelephonyTrunkExternalDisplayedNumberV6', ($resource) => $resource('/telephony/:billingAccount/trunk/:serviceName/externalDisplayedNumber/:number', {
  billingAccount: '@billingAccount',
  serviceName: '@serviceName',
  number: '@number',
}, {
  getBatch: {
    method: 'GET',
    isArray: true,
    headers: {
      'X-Ovh-Batch': ',',
    },
  },
  save: {
    method: 'POST',
    url: '/telephony/:billingAccount/trunk/:serviceName/externalDisplayedNumber', // because post param number is the same as query param number...
    isArray: false,
  },
  validate: {
    method: 'POST',
    url: '/telephony/:billingAccount/trunk/:serviceName/externalDisplayedNumber/:number/validate',
    isArray: false,
  },
}));
