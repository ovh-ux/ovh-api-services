angular.module('ovh-api-services').service('OvhApiMeAlertsAapi', ($resource) => $resource('/me/alerts', {}, {
  query: {
    method: 'GET',
    isArray: true,
    url: '/me/alerts',
    serviceType: 'aapi',
  },
}));
