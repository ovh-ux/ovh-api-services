angular.module('ovh-api-services').service('OvhApiPackXdslServiceInfoAapi', ($resource, OvhApiPackXdslServiceInfo) => $resource('/pack/xdsl/:packName/serviceInfos/all', {
  packName: '@packName',
}, {
  infoAll: {
    method: 'GET',
    serviceType: 'aapi',
    isArray: true,
    cache: OvhApiPackXdslServiceInfo.cache,
  },
}));
