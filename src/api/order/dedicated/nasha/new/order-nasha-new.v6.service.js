angular.module('ovh-api-services').service('OvhApiOrderDedicatedNashaNewV6', ($resource, $cacheFactory) => {
  // Cache to invalidate
  const queryCache = $cacheFactory('OvhApiOrderDedicatedNashaNewV6Query');
  const cache = $cacheFactory('OvhApiOrderDedicatedNashaNewV6');
  const interceptor = {
    response(response) {
      queryCache.removeAll();
      return response.data;
    },
  };

  const resource = $resource('/order/dedicated/nasha/new/:duration', {
    duration: '@duration',
  }, {
    query: {
      method: 'GET',
      isArray: true,
      cache: queryCache,
      params: {
        datacenter: '@datacenter',
        model: '@model',
      },
    },
    get: {
      method: 'GET',
      cache,
      isArray: false,
      params: {
        datacenter: '@datacenter',
        model: '@model',
      },
    },
    create: {
      method: 'POST',
      interceptor,
    },

  });

  resource.resetCache = function () {
    cache.removeAll();
  };

  resource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return resource;
});
