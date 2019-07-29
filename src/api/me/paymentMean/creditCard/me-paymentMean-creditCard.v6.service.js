angular.module('ovh-api-services').service('OvhApiMePaymentMeanCreditCardV6', ($resource, $q) => {
  const resource = $resource('/me/paymentMean/creditCard/:id', {
    id: '@id',
  }, {
    edit: {
      method: 'PUT',
    },
    chooseAsDefaultPaymentMean: {
      method: 'POST',
      url: '/me/paymentMean/creditCard/:id/chooseAsDefaultPaymentMean',
    },
    challenge: {
      method: 'POST',
      url: '/me/paymentMean/creditCard/:id/challenge',
    },
  });

  resource.getDefaultPaymentMean = function () {
    let defaultPaymentMean;
    return resource.query().$promise.then((creditCardIds) => {
      const queue = [];
      angular.forEach(creditCardIds, (creditCardId) => {
        queue.push(resource.get({ id: creditCardId }).$promise.then((creditCard) => {
          if (creditCard.defaultPaymentMean) {
            defaultPaymentMean = creditCard;
          }
        }));
      });
      return $q.all(queue).then(() => defaultPaymentMean);
    });
  };

  resource.getCreditCards = function () {
    return resource.query().$promise.then((ids) => {
      const queue = [];
      angular.forEach(ids, (id) => {
        queue.push(resource.get({ id }).$promise);
      });
      return $q.all(queue);
    });
  };

  return resource;
});
