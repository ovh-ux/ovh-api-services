angular.module('ovh-api-services').service('OvhApiPackXdslExchangeLiteV6', ($resource, $http, OvhApiPackXdslExchangeLite) => {
  const interceptor = {
    response(response) {
      OvhApiPackXdslExchangeLite.resetCache();
      return response.resource;
    },
  };

  const packXdslExchangeLite = $resource('/pack/xdsl/:packId/exchangeLite/services', {
    packId: '@packId',
  }, {
    query: {
      method: 'GET',
      isArray: true,
      cache: OvhApiPackXdslExchangeLite.cache,
    },
    save: {
      method: 'POST',
      interceptor,
    },
  });

  // To be refactored
  packXdslExchangeLite.isEmailAvailable = function (params) {
    return $http({
      url: `/pack/xdsl/${params.packId}/exchangeLite/options/isEmailAvailable`,
      method: 'GET',
      params: { email: params.email },
    });
  };

  return packXdslExchangeLite;
});
