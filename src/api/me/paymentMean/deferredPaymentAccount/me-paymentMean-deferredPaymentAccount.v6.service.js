angular.module('ovh-api-services').service('OvhApiMePaymentMeanDeferredPaymentAccountV6', ($resource) => $resource('/me/paymentMean/deferredPaymentAccount/:id', {
  id: '@id',
}, {
  edit: {
    method: 'PUT',
  },
  chooseAsDefaultPaymentMean: {
    method: 'POST',
    url: '/me/paymentMean/deferredPaymentAccount/:id/chooseAsDefaultPaymentMean',
  },
}));
