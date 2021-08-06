angular.module('ovh-api-services').service('OvhApiTelephonyAapi', ($resource) => $resource('/telephony', {}, {
  count: {
    method: 'GET',
    url: '/telephony/count',
    serviceType: 'aapi',
    isArray: false,
  },
  billingAccounts: {
    method: 'GET',
    url: '/telephony/all',
    serviceType: 'aapi',
    isArray: true,
  },
}));
