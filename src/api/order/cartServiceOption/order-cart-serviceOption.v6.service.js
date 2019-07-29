angular.module('ovh-api-services').service('OvhApiOrderCartServiceOptionV6', ($resource, $cacheFactory) => {
  // Cache to invalidate
  const queryCache = $cacheFactory('OvhApiOrderCartServiceOptionV6Query');
  const cache = $cacheFactory('OvhApiOrderCartServiceOptionV6');

  const interceptor = {
    response(response) {
      orderCartServiceOption.resetQueryCache();
      return response.data;
    },
  };

  const orderCartServiceOption = $resource('/order/cartServiceOption/:productName/:serviceName', {
    productName: '@productName',
    serviceName: '@serviceName',
  }, {
    get: { method: 'GET', cache, isArray: true },
    post: { method: 'POST', interceptor },
  });

  orderCartServiceOption.resetCache = function () {
    cache.removeAll();
  };

  orderCartServiceOption.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return orderCartServiceOption;
});
