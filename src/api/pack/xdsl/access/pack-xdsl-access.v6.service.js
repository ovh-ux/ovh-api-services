angular.module('ovh-api-services').service('OvhApiPackXdslAccessV6', ($resource, OvhApiPackXdslAccess) => $resource('/pack/xdsl/:packId/xdslAccess', {
  packId: '@packId',
}, {
  getServices: {
    url: '/pack/xdsl/:packId/xdslAccess/services',
    isArray: true,
    cache: OvhApiPackXdslAccess.cache,
  },
}));
