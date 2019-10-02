angular.module('ovh-api-services').service('OvhApiTelephonyServiceOfferTaskV6', ($resource) => $resource('/telephony/:billingAccount/service/:serviceName/offerTask/:taskId', {
  billingAccount: '@billingAccount',
  serviceName: '@serviceName',
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
