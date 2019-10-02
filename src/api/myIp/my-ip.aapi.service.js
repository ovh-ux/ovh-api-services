angular.module('ovh-api-services').service('OvhApiMyIpAapi', ($resource) => $resource('/myIp', {}, {
  get: {
    serviceType: 'aapi',
    isArray: true,
  },
}));
