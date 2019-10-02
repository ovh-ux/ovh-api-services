angular.module('ovh-api-services').service('OvhApiMeDepositRequestV6', ($resource) => $resource('/me/depositRequest/:id', {
  id: '@id',
}));
