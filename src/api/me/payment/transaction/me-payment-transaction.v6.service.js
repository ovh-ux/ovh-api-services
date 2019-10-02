angular.module('ovh-api-services').service('OvhApiMePaymentTransactionV6', ($resource) => $resource('/me/payment/transaction/:transactionId', {
  transactionId: '@transactionId',
}));
