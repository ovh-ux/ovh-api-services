angular.module('ovh-api-services').service('OvhApiMeVoucherAccountMovementsV6', ($resource) => $resource('/me/voucherAccount/:voucherAccountId/movements/:movementId', {
  voucherAccountId: '@voucherAccountId',
  movementId: '@movementId',
}));
