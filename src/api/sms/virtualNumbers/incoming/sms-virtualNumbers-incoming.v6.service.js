angular.module('ovh-api-services').service('OvhApiSmsVirtualNumbersIncomingV6', ($cacheFactory, $resource) => {
  const cache = $cacheFactory('OvhApiSmsVirtualNumbersIncomingV6');
  const queryCache = $cacheFactory('OvhApiSmsVirtualNumbersIncomingV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.resource;
    },
  };

  return $resource('/sms/:serviceName/virtualNumbers/:number/incoming/:id', {
    serviceName: '@serviceName',
    number: '@number',
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
    getBatch: {
      method: 'GET',
      isArray: true,
      headers: {
        'X-Ovh-Batch': ',',
      },
      cache,
    },
    delete: {
      method: 'DELETE',
      interceptor,
    },
    resetCache() {
      cache.removeAll();
    },
  });
});
