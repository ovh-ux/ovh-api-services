angular.module('ovh-api-services').service('OvhApiVpsV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiVpsV6');
  const queryCache = $cacheFactory('OvhApiVpsV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response;
    },
  };

  const vps = $resource('/vps/:serviceName', {
    serviceName: '@serviceName',
  }, {
    query: { method: 'GET', isArray: true, cache: queryCache },
    get: { method: 'GET', cache },
    edit: { method: 'PUT', interceptor },
    getMonitoring: {
      url: '/vps/:serviceName/monitoring',
      method: 'GET',
      period: '@period',
      type: '@type',
      cache,
    },
    availableUpgrade: {
      url: '/vps/:serviceName/availableUpgrade',
      method: 'GET',
      isArray: true,
    },
    version: {
      url: '/vps/:serviceName/version',
      method: 'GET',
    },
    rebuild: {
      url: '/vps/:serviceName/rebuild',
      method: 'POST',
      interceptor,
    },
    resintall: {
      url: '/vps/:serviceName/reinstall',
      method: 'POST',
      interceptor,
    },
    confirmTermination: {
      url: '/vps/:serviceName/confirmTermination',
      method: 'POST',
      interceptor,
    },
    terminate: {
      url: '/vps/:serviceName/terminate',
      method: 'POST',
      interceptor,
    },
  });

  vps.resetCache = function () {
    cache.removeAll();
  };

  vps.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return vps;
});
