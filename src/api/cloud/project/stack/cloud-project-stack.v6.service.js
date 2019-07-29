angular.module('ovh-api-services').service('OvhApiCloudProjectStackV6', ($resource, $cacheFactory) => {
  const queryCache = $cacheFactory('OvhApiCloudProjectStackV6Query');
  const cache = $cacheFactory('OvhApiCloudProjectStackV6');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.data;
    },
  };

  const stack = $resource('/cloud/project/:serviceName/stack/:stackId', {
    serviceName: '@serviceName',
    stackId: '@stackId',
  }, {
    get: { method: 'GET', cache },
    query: { method: 'GET', cache: queryCache, isArray: true },
    availability: {
      url: '/cloud/project/:serviceName/stack/:stackId/availability',
      method: 'GET',
      interceptor,
    },
    client: {
      url: '/cloud/project/:serviceName/stack/:stackId/client',
      method: 'POST',
      interceptor,
    },
  });

  stack.resetCache = function () {
    cache.removeAll();
  };

  stack.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return stack;
});
