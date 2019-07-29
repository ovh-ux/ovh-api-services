angular.module('ovh-api-services').service('OvhApiPackXdslExchangeIndividualV6', ($resource, $http, OvhApiPackXdslExchangeIndividual) => {
  const interceptor = {
    response(response) {
      OvhApiPackXdslExchangeIndividual.resetCache();
      return response.resource;
    },
  };

  const packXdslExchangeIndividual = $resource('/pack/xdsl/:packId/exchangeIndividual/services', {
    packId: '@packId',
  }, {
    query: {
      method: 'GET',
      isArray: true,
      cache: OvhApiPackXdslExchangeIndividual.cache,
    },
    save: {
      method: 'POST',
      interceptor,
    },
    getDomains: {
      method: 'GET',
      url: '/pack/xdsl/:packId/exchangeIndividual/options/domains',
      isArray: true,
      cache: OvhApiPackXdslExchangeIndividual.cache,
    },
  });

  // To be refactored
  packXdslExchangeIndividual.isEmailAvailable = function (params) {
    return $http({
      url: `/pack/xdsl/${params.packId}/exchangeIndividual/options/isEmailAvailable`,
      method: 'GET',
      params: { email: params.email },
    });
  };

  return packXdslExchangeIndividual;
});
