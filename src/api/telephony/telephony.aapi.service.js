angular.module('ovh-api-services').service('OvhApiTelephonyAapi', $resource => $resource('/telephony', {}, {
  query: {
    method: 'GET',
    serviceType: 'aapi',
    isArray: true,
  },
  count: {
    method: 'GET',
    url: '/telephony/count',
    serviceType: 'aapi',
    isArray: false,
  },
  infra: {
    method: 'GET',
    url: '/telephony/infra/:billingAccount',
    serviceType: 'aapi',
    isArray: false,
  },
  aliasAll: {
    method: 'GET',
    url: '/telephony/alias/all',
    serviceType: 'aapi',
    isArray: true,
  },
  billingAccounts: {
    method: 'GET',
    url: '/telephony/all',
    serviceType: 'aapi',
    isArray: true,
  },
}));
