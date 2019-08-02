angular.module('ovh-api-services').service('OvhApiMeV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiMeV6');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      return response;
    },
  };

  const me = $resource('/me', {}, {
    get: { method: 'GET', cache },
    update: { method: 'PUT', interceptor },
    schema: { method: 'GET', url: '/me.json' },
    consumption: {
      method: 'GET',
      url: '/me/consumption/usage/current',
      isArray: true,
    },
    consumptionHistory: {
      method: 'GET',
      url: '/me/consumption/usage/history',
      isArray: true,
    },
    supportLevel: {
      method: 'GET',
      url: '/me/supportLevel',
      isArray: false,
    },
    certificates: {
      method: 'GET',
      url: '/me/certificates',
      isArray: true,
    },
  });

  me.resetCache = function () {
    cache.removeAll();
  };

  return me;
});
