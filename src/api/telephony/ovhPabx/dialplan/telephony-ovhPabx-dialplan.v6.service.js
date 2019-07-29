angular.module('ovh-api-services').service('OvhApiTelephonyOvhPabxDialplanV6', $resource => $resource('/telephony/:billingAccount/ovhPabx/:serviceName/dialplan/:dialplanId', {
  billingAccount: '@billingAccount',
  serviceName: '@serviceName',
  dialplanId: '@dialplanId',
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
