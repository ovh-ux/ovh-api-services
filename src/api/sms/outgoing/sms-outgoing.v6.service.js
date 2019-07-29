angular.module('ovh-api-services').service('OvhApiSmsOutgoingV6', ($cacheFactory, $resource) => {
  const cache = $cacheFactory('OvhApiSmsOutgoingV6');
  const queryCache = $cacheFactory('OvhApiSmsOutgoingV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.resource;
    },
  };

  const outgoingResource = $resource('/sms/:serviceName/outgoing/:id', {
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
    delete: {
      method: 'DELETE',
      interceptor,
    },
    getHlr: {
      method: 'GET',
      url: '/sms/:serviceName/outgoing/:id/hlr',
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
  });

  outgoingResource.resetCache = function () {
    cache.removeAll();
  };

  outgoingResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  outgoingResource.resetAllCache = function () {
    this.resetCache();
    this.resetQueryCache();
  };

  return outgoingResource;
});
