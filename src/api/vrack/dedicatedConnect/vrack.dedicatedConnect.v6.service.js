

angular.module('ovh-api-services').service('OvhApiVrackDedicatedConnectV6', ($resource, $cacheFactory, OvhApiVrack) => {
  const cache = $cacheFactory('OvhApiVrackDedicatedConnectV6');
  const queryCache = $cacheFactory('OvhApiVrackDedicatedConnectV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      OvhApiVrack.Aapi().resetAllCache();
      return response;
    },
  };

  const vrackDedicatedConnect = $resource('/vrack/:serviceName/dedicatedConnect/:name', {
    serviceName: '@serviceName',
    name: '@name',
  }, {
    query: { method: 'GET', isArray: true, cache: queryCache },
    get: { method: 'GET', cache },
    edit: { method: 'PUT', interceptor },
    delete: { method: 'DELETE', interceptor },
    create: {
      method: 'POST',
      url: '/vrack/:serviceName/dedicatedConnect',
      interceptor,
    },
  });

  vrackDedicatedConnect.resetCache = function () {
    cache.removeAll();
    OvhApiVrack.Aapi().resetAllCache();
  };

  vrackDedicatedConnect.resetQueryCache = function () {
    queryCache.removeAll();
    OvhApiVrack.Aapi().resetAllCache();
  };

  return vrackDedicatedConnect;
});
