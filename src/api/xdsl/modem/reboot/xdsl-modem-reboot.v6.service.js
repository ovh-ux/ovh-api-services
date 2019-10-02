angular.module('ovh-api-services').service('OvhApiXdslModemRebootV6', ($resource) => $resource('/xdsl/:xdslId/modem/reboot', {
  xdslId: '@xdslId',
}));
