angular.module('ovh-api-services').service('OvhApiMePaymentMeanBankAccountV6', ($resource, $q) => {
  const resource = $resource('/me/paymentMean/bankAccount/:id', {
    id: '@id',
    state: '@state',
  }, {
    edit: {
      method: 'PUT',
    },
    chooseAsDefaultPaymentMean: {
      method: 'POST',
      url: '/me/paymentMean/bankAccount/:id/chooseAsDefaultPaymentMean',
    },
    challenge: {
      method: 'POST',
      url: '/me/paymentMean/bankAccount/:id/challenge',
    },
  });

  resource.getDefaultPaymentMean = function () {
    let defaultPaymentMean;
    return resource.query({ state: 'valid' }).$promise.then((bankAccountIds) => {
      const queue = [];
      angular.forEach(bankAccountIds, (bankAccountId) => {
        queue.push(resource.get({ id: bankAccountId }).$promise.then((bankAccount) => {
          if (bankAccount.defaultPaymentMean) {
            defaultPaymentMean = bankAccount;
          }
        }));
      });
      return $q.all(queue).then(() => defaultPaymentMean);
    });
  };

  return resource;
});
