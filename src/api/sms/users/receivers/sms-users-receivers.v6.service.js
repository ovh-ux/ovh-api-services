angular.module('ovh-api-services').service('OvhApiSmsUsersReceiversV6', ($cacheFactory, $resource) => {
  const cache = $cacheFactory('OvhApiSmsUsersReceiversV6');
  const queryCache = $cacheFactory('OvhApiSmsUsersReceiversV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.resource;
    },
  };

  const usersReceivers = $resource('/sms/:serviceName/users/:login/receivers/:slotId', {
    serviceName: '@serviceName',
    login: '@login',
    slotId: '@slotId',
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
    create: {
      method: 'POST',
      url: '/sms/:serviceName/receivers',
      interceptor,
    },
    getCsv: {
      method: 'GET',
      url: '/sms/:serviceName/users/:login/receivers/:slotId/csv',
      cache,
      transformResponse(data, headers, status) {
        if (status === 200) {
          return { data: angular.fromJson(data) };
        }
        return data;
      },
    },
    clean: {
      method: 'POST',
      url: '/sms/:serviceName/users/:login/receivers/:slotId/clean',
      interceptor,
    },
  });

  usersReceivers.resetCache = function () {
    cache.removeAll();
  };

  usersReceivers.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return usersReceivers;
});
