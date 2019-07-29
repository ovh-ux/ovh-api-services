angular.module('ovh-api-services').service('OvhApiSmsUsersOutgoingV6', ($cacheFactory, $resource) => {
  const cache = $cacheFactory('OvhApiSmsUsersOutgoingV6');
  const queryCache = $cacheFactory('OvhApiSmsUsersOutgoingV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.resource;
    },
  };

  const usersOutgoing = $resource('/sms/:serviceName/users/:login/outgoing/:id', {
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
    getHlr: {
      method: 'GET',
      url: '/sms/:serviceName/users/:login/outgoing/:id/hlr',
      cache,
    },
  });

  usersOutgoing.resetCache = function () {
    cache.removeAll();
  };

  usersOutgoing.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return usersOutgoing;
});
