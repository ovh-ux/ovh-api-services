angular.module('ovh-api-services').service('OvhApiPackXdslAccessAapi', ($resource, OvhApiPackXdslAccess) => $resource('/pack/xdsl/:packId/access/services', {
  packId: '@packId',
}, {
  query: {
    serviceType: 'aapi',
    isArray: true,
    cache: OvhApiPackXdslAccess.cache,
  },
}));
