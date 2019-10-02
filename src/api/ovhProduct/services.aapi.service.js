angular.module('ovh-api-services').service('OvhApiOvhProductAapi', ($resource) => $resource('/sws/ovhProduct/services', {}, {
  query: {
    isArray: true,
    serviceType: 'aapi',
  },
}));
