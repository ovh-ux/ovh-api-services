angular.module('ovh-api-services').service('OvhApiMeFidelityAccountV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiMeFidelityAccountV6');

  const userFidelityResource = $resource('/me/fidelityAccount', {}, {
    get: {
      method: 'GET',
      cache,
    },
  });

  userFidelityResource.resetCache = function () {
    cache.removeAll();
  };

  return userFidelityResource;
});
