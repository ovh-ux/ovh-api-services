angular.module('ovh-api-services').service('OvhApiXdslOrderFollowupAapi', ($resource, OvhApiXdslOrderFollowup) => $resource('/xdsl/orderFollowup', {
}, {
  query: {
    method: 'GET',
    isArray: true,
    serviceType: 'aapi',
    cache: OvhApiXdslOrderFollowup.cache,
  },
}));
