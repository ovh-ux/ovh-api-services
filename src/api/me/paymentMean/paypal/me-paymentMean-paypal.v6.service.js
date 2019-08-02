angular.module('ovh-api-services').service('OvhApiMePaymentMeanPaypalV6', ($resource, $q) => {
  const resource = $resource('/me/paymentMean/paypal/:id', {
    id: '@id',
  }, {
    edit: {
      method: 'PUT',
    },
    chooseAsDefaultPaymentMean: {
      method: 'POST',
      url: '/me/paymentMean/paypal/:id/chooseAsDefaultPaymentMean',
    },
    challenge: {
      method: 'POST',
      url: '/me/paymentMean/paypal/:id/challenge',
    },
  });

  resource.getDefaultPaymentMean = function () {
    let defaultPaymentMean;
    return resource.query().$promise.then((paypalIds) => {
      const queue = [];
      angular.forEach(paypalIds, (paypalId) => {
        queue.push(resource.get({ id: paypalId }).$promise.then((paypal) => {
          if (paypal.defaultPaymentMean) {
            defaultPaymentMean = paypal;
          }
        }));
      });
      return $q.all(queue).then(() => defaultPaymentMean);
    });
  };

  return resource;
});
