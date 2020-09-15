angular.module('ovh-api-services').service('OvhApiXdslModemAvailableACSBackendV6', ($resource, OvhApiXdslModemAvailableACSBackend) => $resource('/xdsl/:xdslId/modem/availableACSBackend', {
  xdslId: '@xdslId',
}, {
  get: {
    method: 'GET',
    isArray: true,
    cache: OvhApiXdslModemAvailableACSBackend.cache,
  },
}));
