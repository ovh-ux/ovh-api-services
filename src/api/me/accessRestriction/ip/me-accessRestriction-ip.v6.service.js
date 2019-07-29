angular.module('ovh-api-services').service('OvhApiMeAccessRestrictionIpV6', ($cacheFactory, $resource) => {
  const cache = $cacheFactory('OvhApiMeAccessRestrictionIpV6');
  const queryCache = $cacheFactory('OvhApiMeAccessRestrictionIpV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.resource;
    },
  };

  const resource = $resource('/me/accessRestriction/ip/:ip', {
    ip: '@ip',
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
    create: {
      method: 'POST',
      url: '/me/accessRestriction/ip',
      interceptor,
    },
    update: {
      method: 'PUT',
      interceptor,
    },
    delete: {
      method: 'DELETE',
      interceptor,
    },
  });

  resource.resetCache = function () {
    cache.removeAll();
  };

  resource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  resource.resetAllCache = function () {
    this.resetCache();
    this.resetQueryCache();
  };

  return resource;
});
