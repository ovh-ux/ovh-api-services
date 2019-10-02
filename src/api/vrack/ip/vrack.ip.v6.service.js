
angular.module('ovh-api-services').service('OvhApiVrackIpV6', ($resource, $cacheFactory, OvhApiVrack) => {
  const cache = $cacheFactory('OvhApiVrackIpV6');
  const queryCache = $cacheFactory('OvhApiVrackIpV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      OvhApiVrack.Aapi().resetAllCache();
      return response;
    },
  };

  const vrackIp = $resource('/vrack/:serviceName/ip/:ip', {
    serviceName: '@serviceName',
    ip: '@ip',
  }, {
    query: { method: 'GET', isArray: true, cache: queryCache },
    get: { method: 'GET', cache },
    edit: { method: 'PUT', interceptor },
    delete: { method: 'DELETE', interceptor },
    create: {
      method: 'POST',
      url: '/vrack/:serviceName/ip',
      interceptor,
    },
  });

  vrackIp.resetCache = function () {
    cache.removeAll();
    OvhApiVrack.Aapi().resetAllCache();
  };

  vrackIp.resetQueryCache = function () {
    queryCache.removeAll();
    OvhApiVrack.Aapi().resetAllCache();
  };

  return vrackIp;
});
