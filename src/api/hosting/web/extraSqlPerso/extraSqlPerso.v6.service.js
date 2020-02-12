angular.module('ovh-api-services').service('OvhApiHostingWebExtraSqlPersoV6', ($cacheFactory, $resource) => {
  const cache = $cacheFactory('OvhApiHostingWebExtraSqlPersoV6');
  const queryCache = $cacheFactory('OvhApiHostingWebExtraSqlPersoV6Query');

  const interceptor = {
    response(response) {
      cache.resetCache();
      queryCache.resetCache();
      return response.data;
    },
  };

  const resource = $resource('/hosting/web/:serviceName/extraSqlPerso/:name', {
    serviceName: '@serviceName',
    name: '@name',
  }, {
    query: {
      method: 'GET',
      isArray: true,
      cache: queryCache,
    },

    get: {
      method: 'GET',
      cache,
    },

    queryDatabases: {
      url: '/hosting/web/:serviceName/extraSqlPerso/:name/databases',
      method: 'GET',
      isArray: true,
      cache: queryCache,
    },

    getServiceInfos: {
      url: '/hosting/web/:serviceName/extraSqlPerso/:name/serviceInfos',
      method: 'GET',
      cache,
    },

    updateServiceInfos: {
      url: '/hosting/web/:serviceName/extraSqlPerso/:name/serviceInfosUpdate',
      method: 'POST',
      interceptor,
    },

    terminate: {
      url: '/hosting/web/:serviceName/extraSqlPerso/:name/terminate',
      method: 'POST',
      interceptor,
    },
  });

  resource.resetCache = function resetCache() {
    cache.removeAll();
  };

  resource.resetQueryCache = function resetQueryCache() {
    queryCache.removeAll();
  };

  return resource;
});
