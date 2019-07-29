angular.module('ovh-api-services').service('OvhApiXdslResiliationAapi', ($resource, OvhApiXdslResiliation) => $resource('/xdsl/canCancelResiliation/all', {
}, {
  canCancelAll: {
    method: 'GET',
    isArray: true,
    serviceType: 'aapi',
    cache: OvhApiXdslResiliation.cache,
  },
  terms: {
    url: '/xdsl/:serviceName/resiliationTerms',
    method: 'GET',
    isArray: false,
    serviceType: 'aapi',
    cache: OvhApiXdslResiliation.cache,
  },
}));
