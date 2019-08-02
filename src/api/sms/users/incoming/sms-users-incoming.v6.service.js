angular.module('ovh-api-services').service('OvhApiSmsUsersIncomingV6', ($cacheFactory, $resource) => {
  const cache = $cacheFactory('OvhApiSmsUsersIncomingV6');
  const queryCache = $cacheFactory('OvhApiSmsUsersIncomingV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.resource;
    },
  };

  const usersIncoming = $resource('/sms/:serviceName/users/:login/incoming/:id', {
    serviceName: '@serviceName',
    login: '@login',
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
    delete: {
      method: 'DELETE',
      interceptor,
    },
  });

  usersIncoming.resetCache = function () {
    cache.removeAll();
  };

  usersIncoming.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return usersIncoming;
});
