angular.module('ovh-api-services').service('OvhApiMePayMethodV6', ($resource) => $resource('/me/payment/method/:paymentMethodId', {
  paymentMethodId: '@paymentMethodId',
}, {
  availableMethods: {
    method: 'GET',
    url: '/me/payment/availableMethods',
    isArray: true,
  },
  finalize: {
    method: 'POST',
    url: '/me/payment/method/:paymentMethodId/finalize',
  },
  edit: {
    method: 'PUT',
  },
  challenge: {
    method: 'POST',
    url: '/me/payment/method/:paymentMethodId/challenge',
  },
}));
