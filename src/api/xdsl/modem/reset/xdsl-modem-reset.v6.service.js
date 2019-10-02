angular.module('ovh-api-services').service('OvhApiXdslModemResetV6', ($resource) => $resource('/xdsl/:xdslId/modem/reset', {
  xdslId: '@xdslId',
}, {
  reset: {
    method: 'POST',
  },
}));
