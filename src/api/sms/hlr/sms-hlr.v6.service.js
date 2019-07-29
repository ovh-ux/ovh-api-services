angular.module('ovh-api-services').service('OvhApiSmsHlrV6', ($cacheFactory, $resource) => {
  const cache = $cacheFactory('OvhApiSmsHlrV6');
  const queryCache = $cacheFactory('OvhApiSmsHlrV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.resource;
    },
  };

  const hlr = $resource('/sms/:serviceName/hlr/:id', {
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
    send: {
      method: 'POST',
      interceptor,
    },
    getOperator: {
      method: 'GET',
      url: '/sms/:serviceName/hlr/:id/operator',
      cache,
    },
  });

  hlr.resetCache = function () {
    cache.removeAll();
  };

  hlr.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return hlr;
});
