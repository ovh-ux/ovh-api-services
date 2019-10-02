angular.module('ovh-api-services').service('OvhApiTelephonyOfferTaskV6', ($resource) => $resource('/telephony/:billingAccount/offerTask/:taskId', {
  billingAccount: '@billingAccount',
  taskId: '@taskId',
}, {
  query: {
    method: 'GET',
    isArray: true,
  },
  get: {
    method: 'GET',
  },
}));
