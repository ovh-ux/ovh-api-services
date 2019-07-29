angular.module('ovh-api-services').service('OvhApiOrderOverTheBoxNewV6', ($resource, $cacheFactory) => {
  // Cache to invalidate
  const queryCache = $cacheFactory('OvhApiOrderOverTheBoxNewV6Query');
  const cache = $cacheFactory('OvhApiOrderOverTheBoxNewV6');

  const orderOverTheBox = $resource('/order/overTheBox/new/:duration', {
    duration: '@duration',
  }, {
    query: { method: 'GET', isArray: true, cache: queryCache },
    get: { method: 'GET', cache, isArray: false },
    save: { method: 'POST', interceptor },
  });

  const interceptor = {
    response(response) {
      orderOverTheBox.resetQueryCache();
      return response.data;
    },
  };

  orderOverTheBox.resetCache = function () {
    cache.removeAll();
  };

  orderOverTheBox.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return orderOverTheBox;
});
