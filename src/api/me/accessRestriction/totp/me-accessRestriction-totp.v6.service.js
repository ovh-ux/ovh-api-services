angular.module('ovh-api-services').service('OvhApiMeAccessRestrictionTotpV6', ($cacheFactory, $resource) => {
  const cache = $cacheFactory('OvhApiMeAccessRestrictionTotpV6');
  const queryCache = $cacheFactory('OvhApiMeAccessRestrictionTotpV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.resource;
    },
  };

  const resource = $resource('/me/accessRestriction/totp/:id', {
    id: '@id',
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
      url: '/me/accessRestriction/totp',
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
    disable: {
      method: 'POST',
      url: '/me/accessRestriction/totp/:id/disable',
      interceptor,
    },
    enable: {
      method: 'POST',
      url: '/me/accessRestriction/totp/:id/enable',
      interceptor,
    },
    validate: {
      method: 'POST',
      url: '/me/accessRestriction/totp/:id/validate',
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
