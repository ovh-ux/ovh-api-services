angular.module('ovh-api-services').service('OvhApiMeDebtAccountDebtV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiMeDebtAccountDebtV6');
  const queryCache = $cacheFactory('OvhApiMeDebtAccountDebtQueryV6');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      return response;
    },
  };

  const debtResource = $resource('/me/debtAccount/debt/:debtId', {
    debtId: '@debtId',
  }, {
    get: {
      method: 'GET',
      cache,
    },
    pay: {
      url: '/me/debtAccount/debt/:debtId/pay',
      method: 'POST',
      interceptor,
    },
    getBatch: {
      method: 'GET',
      isArray: true,
      headers: {
        'X-Ovh-Batch': ',',
      },
      cache: queryCache,
    },
  });

  debtResource.resetCache = function () {
    cache.removeAll();
  };

  debtResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  debtResource.resetAllCache = function () {
    cache.removeAll();
    queryCache.removeAll();
  };

  return debtResource;
});
