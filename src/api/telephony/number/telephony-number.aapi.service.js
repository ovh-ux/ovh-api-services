angular.module('ovh-api-services').service('OvhApiTelephonyNumberAapi', ($resource, OvhApiTelephonyNumber) => $resource('/telephony/:billingAccount/number', {
  billingAccount: '@billingAccount',
}, {
  query: {
    method: 'GET',
    isArray: true,
    cache: OvhApiTelephonyNumber.cache,
    serviceType: 'aapi',
  },
  all: {
    method: 'GET',
    url: '/telephony/numbers/all',
    isArray: true,
    cache: OvhApiTelephonyNumber.cache,
    serviceType: 'aapi',
  },
  prices: {
    method: 'GET',
    url: '/telephony/:billingAccount/number/:country/prices',
    isArray: true,
    cache: OvhApiTelephonyNumber.cache,
    serviceType: 'aapi',
  },
  orderableByRange: {
    method: 'GET',
    url: '/telephony/:country/:billingAccount/number/:type/range/:range',
    isArray: false,
    serviceType: 'aapi',
  },
}));
