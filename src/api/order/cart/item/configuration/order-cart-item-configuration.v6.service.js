angular.module('ovh-api-services').service('OvhApiOrderCartItemConfigurationV6', ($resource, $cacheFactory) => {
  // Cache to invalidate
  const queryCache = $cacheFactory('OvhApiOrderCartItemConfigurationV6Query');
  const cache = $cacheFactory('OvhApiOrderCartItemConfigurationV6');

  const interceptor = {
    response(response) {
      orderCartItemConfiguration.resetQueryCache();
      return response.data;
    },
  };

  const orderCartItemConfiguration = $resource('/order/cart/:cartId/item/:itemId/configuration/:configurationId', {
    cartId: '@cartId',
    itemId: '@itemId',
    configurationId: '@configurationId',
  }, {
    query: { method: 'GET', cache: queryCache, isArray: true },
    get: { method: 'GET', cache },
    post: { method: 'POST', interceptor },
  });

  orderCartItemConfiguration.resetCache = function () {
    cache.removeAll();
  };

  orderCartItemConfiguration.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return orderCartItemConfiguration;
});
