angular.module('ovh-api-services').service('OvhApiSmsIncomingV6', ($cacheFactory, $resource) => {
  const cache = $cacheFactory('OvhApiSmsIncomingV6');
  const queryCache = $cacheFactory('OvhApiSmsIncomingV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.resource;
    },
  };

  const incomingResource = $resource('/sms/:serviceName/incoming/:id', {
    serviceName: '@serviceName',
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
  });

  incomingResource.resetCache = function () {
    cache.removeAll();
  };

  incomingResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  incomingResource.resetAllCache = function () {
    this.resetQueryCache();
    this.resetCache();
  };

  return incomingResource;
});
