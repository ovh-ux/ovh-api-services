angular.module('ovh-api-services').service('OvhApiMePaymentMethodV6', ($resource) => $resource('/me/paymentMethod/:id', {
  id: '@id',
}, {
  edit: {
    method: 'PUT',
  },
}));
