angular.module('ovh-api-services').service('OvhApiMeDebtAccountV6', ($resource) => $resource('/me/debtAccount', {}, {
  pay: {
    url: '/me/debtAccount/pay',
    method: 'POST',
  },
}));
