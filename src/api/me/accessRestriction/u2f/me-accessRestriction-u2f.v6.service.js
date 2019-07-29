angular.module('ovh-api-services').service('OvhApiMeAccessRestrictionU2fV6', ($cacheFactory, $resource) => {
  const cache = $cacheFactory('OvhApiMeAccessRestrictionU2fV6');
  const queryCache = $cacheFactory('OvhApiMeAccessRestrictionU2fV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.resource;
    },
  };

  const resource = $resource('/me/accessRestriction/u2f/:id', {
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
      url: '/me/accessRestriction/u2f',
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
    challenge: {
      method: 'POST',
      url: '/me/accessRestriction/u2f/:id/challenge',
      interceptor,
    },
    disable: {
      method: 'POST',
      url: '/me/accessRestriction/u2f/:id/disable',
      interceptor,
    },
    enable: {
      method: 'POST',
      url: '/me/accessRestriction/u2f/:id/enable',
      interceptor,
    },
    validate: {
      method: 'POST',
      url: '/me/accessRestriction/u2f/:id/validate',
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
