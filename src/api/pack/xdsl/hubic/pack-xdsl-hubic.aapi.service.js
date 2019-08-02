angular.module('ovh-api-services').service('OvhApiPackXdslHubicAapi', ($resource, OvhApiPackXdslHubic) => $resource('/pack/xdsl/:packId/hubic', {
  packId: '@packId',
}, {
  query: {
    serviceType: 'aapi',
    isArray: true,
    cache: OvhApiPackXdslHubic.cache,
  },
}));
