angular.module('ovh-api-services').service('OvhApiVrackNashaV6', ($resource, $cacheFactory, OvhApiVrack) => {
  const cache = $cacheFactory('OvhApiVrackNashaV6');
  const queryCache = $cacheFactory('OvhApiVrackNashaV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      OvhApiVrack.Aapi().resetAllCache();
      return response;
    },
  };

  const vrackNasha = $resource('/vrack/:serviceName/nasha/:zpool', {
    serviceName: '@serviceName',
    zpool: '@zpool',
  }, {
    query: { method: 'GET', isArray: true, cache: queryCache },
    get: { method: 'GET', cache },
    edit: { method: 'PUT', interceptor },
    delete: { method: 'DELETE', interceptor },
    create: {
      method: 'POST',
      url: '/vrack/:serviceName/nasha',
      interceptor,
    },

  });

  vrackNasha.resetCache = function () {
    cache.removeAll();
    OvhApiVrack.Aapi().resetAllCache();
  };

  vrackNasha.resetQueryCache = function () {
    queryCache.removeAll();
    OvhApiVrack.Aapi().resetAllCache();
  };

  return vrackNasha;
});
