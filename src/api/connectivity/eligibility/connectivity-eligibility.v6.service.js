angular.module('ovh-api-services').service('OvhApiConnectivityEligibilityV6', ($resource, OvhApiConnectivityEligibility) => $resource('/connectivity/eligibility/search/buildingDetails ', {
}, {
  buildingDetails: {
    method: 'POST',
    isArray: false,
    cache: OvhApiConnectivityEligibility.cache,
  },
}));
