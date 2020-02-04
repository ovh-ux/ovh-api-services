angular.module('ovh-api-services').service('OvhApiMePaymentMeanDeferredPaymentAccountV6', ($q, $resource) => {
  const resource = $resource('/me/paymentMean/deferredPaymentAccount/:id', {
    id: '@id',
  }, {
    edit: {
      method: 'PUT',
    },
    chooseAsDefaultPaymentMean: {
      method: 'POST',
      url: '/me/paymentMean/deferredPaymentAccount/:id/chooseAsDefaultPaymentMean',
    },
  });

  resource.getDefaultPaymentMean = function getDefaultPaymentMean() {
    let defaultPaymentMean;
    return resource.query().$promise.then((deferredIds) => {
      const queue = [];
      angular.forEach(deferredIds, (id) => {
        queue.push(resource.get({ id }).$promise.then((deferred) => {
          if (deferred.defaultPaymentMean) {
            defaultPaymentMean = deferred;
          }
        }));
      });
      return $q.all(queue).then(() => defaultPaymentMean);
    });
  };

  return resource;
});
