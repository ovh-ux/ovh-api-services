angular.module('ovh-api-services').service('OvhApiOrderCartProductV6', ($resource, $cacheFactory) => {
  // Cache to invalidate
  const queryCache = $cacheFactory('OvhApiOrderCartProductV6Query');
  const cache = $cacheFactory('OvhApiOrderCartProductV6');

  const interceptor = {
    response(response) {
      orderCartProduct.resetQueryCache();
      return response.data;
    },
  };

  const orderCartProduct = $resource('/order/cart/:cartId/:productName', {
    cartId: '@cartId',
    productName: '@productName',
  }, {
    get: { method: 'GET', cache, isArray: true },
    getOptions: {
      url: '/order/cart/:cartId/:productName/options',
      method: 'GET',
      cache,
      isArray: true,
    },
    post: { method: 'POST', interceptor },
    postOptions: {
      url: '/order/cart/:cartId/:productName/options',
      method: 'POST',
      interceptor,
    },
  });

  orderCartProduct.resetCache = function () {
    cache.removeAll();
  };

  orderCartProduct.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return orderCartProduct;
});
