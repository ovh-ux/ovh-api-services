angular.module('ovh-api-services').service('OvhApiOrderCartMicrosoftV6', ($resource, $cacheFactory) => {
  // Cache to invalidate
  const cache = $cacheFactory('OvhApiOrderCartMicrosoftV6');

  const interceptor = {
    response(response) {
      orderCartMicrosoft.resetCache();
      return response.data;
    },
  };

  const orderCartMicrosoft = $resource('/order/cart/:cartId/microsoft', {
    cartId: '@cartId',
  }, {
    get: { method: 'GET', cache, isArray: true },
    post: { method: 'POST', interceptor },
    getOptions: {
      url: '/order/cart/:cartId/microsoft/options',
      method: 'GET',
      cache,
      isArray: true,
      queryParams: {
        planCode: '@planCode',
      },
    },
    postOptions: {
      url: '/order/cart/:cartId/microsoft/options',
      method: 'POST',
      interceptor,
    },
  });

  orderCartMicrosoft.resetCache = function () {
    cache.removeAll();
  };

  return orderCartMicrosoft;
});
