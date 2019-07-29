angular.module('ovh-api-services').service('OvhApiMeBillDebtV6', $resource => $resource('/me/bill/:billId/debt', {
  billId: '@billId',
}, {
  pay: {
    url: '/me/bill/:billId/debt/pay',
    method: 'POST',
  },
}));
