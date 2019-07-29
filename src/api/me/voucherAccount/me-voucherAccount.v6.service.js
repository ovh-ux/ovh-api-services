angular.module('ovh-api-services').service('OvhApiMeVoucherAccountV6', $resource => $resource('/me/voucherAccount/:voucherAccountId', {
  voucherAccountId: '@voucherAccountId',
}));
