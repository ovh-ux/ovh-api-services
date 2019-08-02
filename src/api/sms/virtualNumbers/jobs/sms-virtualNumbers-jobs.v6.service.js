angular.module('ovh-api-services').service('OvhApiSmsVirtualNumbersJobsV6', ($cacheFactory, $resource) => {
  const cache = $cacheFactory('OvhApiSmsVirtualNumbersJobsV6');
  const queryCache = $cacheFactory('OvhApiSmsVirtualNumbersJobsV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.resource;
    },
  };

  return $resource('/sms/:serviceName/virtualNumbers/:number/jobs/:id', {
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
    send: {
      method: 'POST',
      isArray: false,
      interceptor,
    },
    resetCache() {
      cache.removeAll();
    },
  });
});
