angular.module('ovh-api-services').service('OvhApiMeDebtAccountDebtOperationV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiMeDebtAccountDebtOperationV6');
  const queryCache = $cacheFactory('OvhApiMeDebtAccountDebtOperationQueryV6');

  const operationResource = $resource('/me/debtAccount/debt/:debtId/operation/:operationId', {
    debtId: '@debtId',
    operationId: '@operationId',
  }, {
    get: {
      method: 'GET',
      cache,
    },
    getBatch: {
      method: 'GET',
      isArray: true,
      headers: {
        'X-Ovh-Batch': ',',
      },
      cache: queryCache,
    },
    associatedObject: {
      url: '/me/debtAccount/debt/:debtId/operation/:operationId/associatedObject',
      method: 'GET',
      cache,
    },
  });

  operationResource.resetCache = function () {
    cache.removeAll();
  };

  operationResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  operationResource.resetAllCache = function () {
    cache.removeAll();
    queryCache.removeAll();
  };

  return operationResource;
});
