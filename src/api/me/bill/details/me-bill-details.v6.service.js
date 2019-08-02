angular.module('ovh-api-services').service('OvhApiMeBillDetailsV6', $resource => $resource('/me/bill/:billId/details/:billDetailId', {
  billId: '@billId',
  billDetailId: '@billDetailId',
}));
