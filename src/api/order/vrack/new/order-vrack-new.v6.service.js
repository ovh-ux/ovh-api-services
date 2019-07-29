angular.module('ovh-api-services').service('OvhApiOrderVrackNewV6', ($resource, $cacheFactory) => {
  // Cache to invalidate
  const queryCache = $cacheFactory('OvhApiOrderVrackNewV6Query');
  const cache = $cacheFactory('OvhApiOrderVrackNewV6');

  const orderVrack = $resource('/order/vrack/new', {
    quantity: '@quantity',
  }, {
    query: { method: 'GET', isArray: true, cache: queryCache },
    get: { method: 'GET', cache, isArray: false },
    create: { method: 'POST', interceptor },

  });

  const interceptor = {
    response(response) {
      orderVrack.resetQueryCache();
      return response.data;
    },
  };

  orderVrack.resetCache = function () {
    cache.removeAll();
  };

  orderVrack.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return orderVrack;
});
