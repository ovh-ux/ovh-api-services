angular.module('ovh-api-services').service('OvhApiSmsBlacklistsV6', ($cacheFactory, $resource) => {
  const cache = $cacheFactory('OvhApiSmsBlacklistsV6');
  const queryCache = $cacheFactory('OvhApiSmsBlacklistsV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.resource;
    },
  };

  const blacklistsResource = $resource('/sms/:serviceName/blacklists/:number', {
    serviceName: '@serviceName',
    number: '@number',
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
    delete: {
      method: 'DELETE',
      interceptor,
    },
  });

  blacklistsResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  blacklistsResource.resetCache = function () {
    cache.removeAll();
  };

  blacklistsResource.resetAllCache = function () {
    this.resetQueryCache();
    this.resetCache();
  };

  return blacklistsResource;
});
