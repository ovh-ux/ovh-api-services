

angular.module('ovh-api-services').service('OvhApiVrackDedicatedServerV6', ($resource, $cacheFactory, OvhApiVrack) => {
  const cache = $cacheFactory('OvhApiVrackDedicatedServerV6');
  const queryCache = $cacheFactory('OvhApiVrackDedicatedServerV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      OvhApiVrack.Aapi().resetAllCache();
      return response;
    },
  };

  const vrackDedicatedServer = $resource('/vrack/:serviceName/dedicatedServer/:dedicatedServer', {
    serviceName: '@serviceName',
    dedicatedServer: '@dedicatedServer',
  }, {
    query: { method: 'GET', isArray: true, cache: queryCache },
    get: { method: 'GET', cache },
    edit: { method: 'PUT', interceptor },
    delete: { method: 'DELETE', interceptor },
    create: {
      method: 'POST',
      url: '/vrack/:serviceName/dedicatedServer',
      interceptor,
    },
  });

  vrackDedicatedServer.resetCache = function () {
    cache.removeAll();
    OvhApiVrack.Aapi().resetAllCache();
  };

  vrackDedicatedServer.resetQueryCache = function () {
    queryCache.removeAll();
    OvhApiVrack.Aapi().resetAllCache();
  };

  return vrackDedicatedServer;
});
