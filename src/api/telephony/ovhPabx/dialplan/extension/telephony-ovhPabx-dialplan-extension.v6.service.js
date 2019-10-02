angular.module('ovh-api-services').service('OvhApiTelephonyOvhPabxDialplanExtensionV6', ($resource) => $resource('/telephony/:billingAccount/ovhPabx/:serviceName/dialplan/:dialplanId/extension/:extensionId', {
  billingAccount: '@billingAccount',
  serviceName: '@serviceName',
  dialplanId: '@dialplanId',
  extensionId: '@extensionId',
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
