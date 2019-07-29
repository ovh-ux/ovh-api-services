angular.module('ovh-api-services').service('OvhApiOrderTelephonyAapi', ($resource, OvhApiOrderTelephony) => $resource('/order/telephony', {
  billingAccount: '@billingAccount',
}, {
  billingAccounts: {
    method: 'GET',
    url: '/order/telephony/all',
    isArray: true,
    serviceType: 'aapi',
    cache: OvhApiOrderTelephony.cache,
  },
}));
