angular.module('ovh-api-services').service('OvhApiWebCoachV6', ($resource, $cacheFactory) => {
  const queryCache = $cacheFactory('OvhApiWebCoachV6Query');
  const cache = $cacheFactory('OvhApiWebCoachV6');
  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response;
    },
  };
  const webCoachResource = $resource('/webcoach', {
    serviceName: '@serviceName',
  }, {
    query: {
      method: 'GET',
      isArray: true,
      cache: queryCache,
    },
    get: { method: 'GET', cache },
    terminate: {
      url: '/webcoach/:serviceName/terminate',
      method: 'POST',
      interceptor,
    },
  });

  webCoachResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return webCoachResource;
});
