angular.module('ovh-api-services').service('OvhApiOrderCartV6', ($resource, $cacheFactory) => {
  // Cache to invalidate
  const queryCache = $cacheFactory('OvhApiOrderCartV6Query');
  const cache = $cacheFactory('OvhApiOrderCartV6');

  const interceptor = {
    response(response) {
      orderCart.resetQueryCache();
      return response.data;
    },
  };

  const orderCart = $resource('/order/cart/:cartId', {
    cartId: '@cartId',
  }, {
    query: { method: 'GET', isArray: true, cache: queryCache },
    get: { method: 'GET', cache, isArray: false },
    post: {
      method: 'POST',
      interceptor,
      url: '/order/cart',
    },
    put: { method: 'PUT', interceptor },
    delete: { method: 'DELETE', interceptor },
    assign: {
      method: 'POST',
      url: '/order/cart/:cartId/assign',
    },
    checkout: {
      method: 'POST',
      url: '/order/cart/:cartId/checkout',
    },
    getCheckout: {
      method: 'GET',
      url: '/order/cart/:cartId/checkout',
    },
    summary: {
      method: 'GET',
      url: '/order/cart/:cartId/summary',
    },
  });

  orderCart.resetCache = function () {
    cache.removeAll();
  };

  orderCart.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return orderCart;
});
