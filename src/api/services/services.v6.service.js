angular.module('ovh-api-services').service('OvhApiServicesV6', $resource => $resource('/services/:serviceId', {
  serviceId: '@serviceId',
}));
