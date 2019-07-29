angular.module('ovh-api-services').service('OvhApiMeAccessRestrictionSmsV6', ($cacheFactory, $resource) => {
  const cache = $cacheFactory('OvhApiMeAccessRestrictionSmsV6');
  const queryCache = $cacheFactory('OvhApiMeAccessRestrictionSmsV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.resource;
    },
  };

  const resource = $resource('/me/accessRestriction/sms/:id', {
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
      url: '/me/accessRestriction/sms',
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
      url: '/me/accessRestriction/sms/:id/disable',
      interceptor,
    },
    enable: {
      method: 'POST',
      url: '/me/accessRestriction/sms/:id/enable',
      interceptor,
    },
    sendCode: {
      method: 'POST',
      url: '/me/accessRestriction/sms/:id/sendCode',
      interceptor,
    },
    validate: {
      method: 'POST',
      url: '/me/accessRestriction/sms/:id/validate',
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
