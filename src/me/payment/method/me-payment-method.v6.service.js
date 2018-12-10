angular.module('ovh-api-services').service('OvhApiMePayMethodV6', function ($resource) {
  'use strict';

  return $resource("/me/payment/method/:paymentMethodId", {
    paymentMethodId: "@paymentMethodId"
  }, {
    availableMethods: {
      method: 'GET',
      url: '/me/payment/availableMethods'
    },
    finalize: {
      method: 'POST',
      url: '/me/payment/method/:paymentMethodId/finalize'
    },
    edit: {
      method: 'PUT'
    }
  });
});
