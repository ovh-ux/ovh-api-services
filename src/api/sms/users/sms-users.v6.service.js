angular.module('ovh-api-services').service('OvhApiSmsUsersV6', ($cacheFactory, $resource) => {
  const cache = $cacheFactory('OvhApiSmsUsersV6');
  const queryCache = $cacheFactory('OvhApiSmsUsersV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.resource;
    },
  };

  const usersResource = $resource('/sms/:serviceName/users/:login', {
    serviceName: '@serviceName',
    login: '@login',
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
    edit: {
      method: 'PUT',
      interceptor,
    },
    delete: {
      method: 'DELETE',
      interceptor,
    },
    create: {
      method: 'POST',
      url: '/sms/:serviceName/users',
      interceptor,
    },
    getDocument: {
      method: 'GET',
      url: '/sms/:serviceName/users/:login/document',
      cache,
    },
  });

  usersResource.resetCache = function () {
    cache.removeAll();
  };

  usersResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  usersResource.resetAllCache = function () {
    this.resetCache();
    this.resetQueryCache();
  };

  return usersResource;
});
