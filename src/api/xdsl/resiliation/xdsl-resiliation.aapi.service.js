angular.module('ovh-api-services').service('OvhApiXdslResiliationAapi', ($resource, OvhApiXdslResiliation) => $resource('/xdsl/canCancelResiliation/all', {
}, {
  terms: {
    url: '/xdsl/:serviceName/resiliationTerms',
    method: 'GET',
    isArray: false,
    serviceType: 'aapi',
    cache: OvhApiXdslResiliation.cache,
  },
}));
