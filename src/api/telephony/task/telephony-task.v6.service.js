angular.module('ovh-api-services').service('OvhApiTelephonyTaskV6', $resource => $resource('/telephony/:billingAccount/task/:taskId', {
  billingAccount: '@billingAccount',
  taskId: '@taskId',
}, {
  query: {
    method: 'GET',
    isArray: true,
  },
  get: {
    method: 'GET',
    isArray: false,
  },
}));
