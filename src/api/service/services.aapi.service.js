angular.module('ovh-api-services').service('OvhApiServiceAapi', $resource => $resource('/service', {}, {
  query: {
    isArray: true,
    serviceType: 'aapi',
  },
}));
