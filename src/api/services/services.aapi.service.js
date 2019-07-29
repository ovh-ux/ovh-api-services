angular.module('ovh-api-services').service('OvhApiServicesAapi', $resource => $resource('/services', {}, {
  get: {
    isArray: true,
    serviceType: 'aapi',
  },
}));
