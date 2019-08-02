angular.module('ovh-api-services').service('OvhApiMeContactV6', ($resource, $cacheFactory) => {
  const queryCache = $cacheFactory('OvhApiMeContactQueryV6');
  const cache = $cacheFactory('OvhApiMeContactV6');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.data;
    },
  };

  return $resource('/me/contact/:contactId', {
    contactId: '@contactId',
  }, {
    get: {
      method: 'GET',
      cache,
    },
    query: {
      method: 'GET',
      cache: queryCache,
      isArray: true,
    },
    create: {
      method: 'POST',
      interceptor,
    },
    save: {
      method: 'PUT',
      interceptor,
    },
  });
});
