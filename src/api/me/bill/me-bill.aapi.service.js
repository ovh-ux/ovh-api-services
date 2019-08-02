angular.module('ovh-api-services').service('OvhApiMeBillAapi', $resource => $resource('/me/bill', {}, {
  last: {
    method: 'GET',
    url: '/me/bill/last',
    serviceType: 'aapi',
    isArray: true,
  },
}));
