angular.module('ovh-api-services').service('OvhApiMeAccessRestrictionBackupCodeV6', ($cacheFactory, $resource) => {
  const cache = $cacheFactory('OvhApiMeAccessRestrictionBackupCodeV6');
  const queryCache = $cacheFactory('OvhApiMeAccessRestrictionBackupCodeV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.resource;
    },
  };

  const resource = $resource('/me/accessRestriction/backupCode', {}, {
    get: {
      method: 'GET',
      cache,
    },
    create: {
      method: 'POST',
      interceptor,
    },
    delete: {
      method: 'DELETE',
      interceptor,
    },
    disable: {
      method: 'POST',
      url: '/me/accessRestriction/backupCode/disable',
      interceptor,
    },
    enable: {
      method: 'POST',
      url: '/me/accessRestriction/backupCode/enable',
      interceptor,
    },
    validate: {
      method: 'POST',
      url: '/me/accessRestriction/backupCode/validate',
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
