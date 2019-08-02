angular.module('ovh-api-services').service('OvhApiOrderCartItemV6', ($resource, $cacheFactory) => {
  // Cache to invalidate
  const queryCache = $cacheFactory('OvhApiOrderCartItemV6Query');
  const cache = $cacheFactory('OvhApiOrderCartItemV6');

  const interceptor = {
    response(response) {
      orderCartItem.resetQueryCache();
      return response.data;
    },
  };

  const orderCartItem = $resource('/order/cart/:cartId/item/:itemId', {
    cartId: '@cartId',
    itemId: '@itemId',
  }, {
    query: { method: 'GET', cache: queryCache },
    get: { method: 'GET', cache },
    put: { method: 'PUT', interceptor },
  });

  orderCartItem.resetCache = function () {
    cache.removeAll();
  };

  orderCartItem.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return orderCartItem;
});
