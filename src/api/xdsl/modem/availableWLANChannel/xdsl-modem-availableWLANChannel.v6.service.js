angular.module('ovh-api-services').service('OvhApiXdslModemAvailableWLANChannelV6', ($resource, OvhApiXdslModemAvailableWLANChannel) => $resource('/xdsl/:xdslId/modem/availableWLANChannel', {
  xdslId: '@xdslId',
}, {
  get: {
    method: 'GET',
    isArray: true,
    cache: OvhApiXdslModemAvailableWLANChannel.cache,
  },
}));
