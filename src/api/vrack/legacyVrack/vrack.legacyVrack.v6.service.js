

angular.module('ovh-api-services').service('OvhApiVrackLegacyVrackV6', ($resource, $cacheFactory, OvhApiVrack) => {
  const cache = $cacheFactory('OvhApiVrackLegacyVrackV6');
  const queryCache = $cacheFactory('OvhApiVrackLegacyVrackV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      OvhApiVrack.Aapi().resetAllCache();
      return response;
    },
  };

  const vrackLegacyVrack = $resource('/vrack/:serviceName/legacyVrack/:legacyVrack', {
    serviceName: '@serviceName',
    legacyVrack: '@legacyVrack',
  }, {
    query: { method: 'GET', isArray: true, cache: queryCache },
    get: { method: 'GET', cache },
    edit: { method: 'PUT', interceptor },
    delete: { method: 'DELETE', interceptor },
    create: {
      method: 'POST',
      url: '/vrack/:serviceName/legacyVrack',
      interceptor,
    },
  });

  vrackLegacyVrack.resetCache = function () {
    cache.removeAll();
    OvhApiVrack.Aapi().resetAllCache();
  };

  vrackLegacyVrack.resetQueryCache = function () {
    queryCache.removeAll();
    OvhApiVrack.Aapi().resetAllCache();
  };

  return vrackLegacyVrack;
});
