angular.module('ovh-api-services').service('OvhApiHubServiceAapi', ($resource) => $resource('/hub/:service', { service: '@service' }, {
  query: {
    isArray: false,
    serviceType: 'aapi',
  },
  get: {
    serviceType: 'aapi',
  },
}));
