angular.module('ovh-api-services').service('OvhApiPortalRadarServerAapi', ($resource, OvhApiPortalRadarServer) => $resource('/dedicated/server/radar/aggregate', {}, {
  aggregate: {
    method: 'GET',
    serviceType: 'aapi',
    isArray: true,
    cache: OvhApiPortalRadarServer.cache,
  },
}));
