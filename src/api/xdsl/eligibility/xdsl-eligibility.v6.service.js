angular.module('ovh-api-services').service('OvhApiXdslEligibilityV6', ($resource, OvhApiXdslEligibility) => $resource('/xdsl/eligibility', {
}, {
  getCities: {
    method: 'GET',
    isArray: true,
    url: '/xdsl/eligibility/cities',
    cache: OvhApiXdslEligibility.cache,
  },
  getStreets: {
    method: 'GET',
    isArray: true,
    url: '/xdsl/eligibility/streets',
    cache: OvhApiXdslEligibility.cache,
  },
}));
