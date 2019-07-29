angular.module('ovh-api-services').service('OvhApiSmsVirtualNumbersOutgoingV6', ($cacheFactory, $resource) => {
  const cache = $cacheFactory('OvhApiSmsVirtualNumbersOutgoingV6');
  const queryCache = $cacheFactory('OvhApiSmsVirtualNumbersOutgoingV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.resource;
    },
  };

  return $resource('/sms/:serviceName/virtualNumbers/:number/outgoing/:id', {
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
    getHlr: {
      method: 'GET',
      url: '/sms/:serviceName/virtualNumbers/:number/outgoing/:id/hlr',
      cache,
    },
    resetCache() {
      cache.removeAll();
    },
  });
});
