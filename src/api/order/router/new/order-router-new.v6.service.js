angular.module('ovh-api-services').service('OvhApiOrderRouterNewV6', ($resource, $cacheFactory, OvhApiRouter) => {
  // Cache to invalidate
  const queryCache = $cacheFactory('OvhApiOrderRouterNewV6Query');
  const cache = $cacheFactory('OvhApiOrderRouterNewV6');

  const interceptor = {
    response(response) {
      OvhApiRouter.v6().resetQueryCache();
      return response;
    },
  };

  return $resource('/order/router/new/:duration', {
    duration: '@duration',
  }, {
    query: { method: 'GET', isArray: true, cache: queryCache },
    get: { method: 'GET', cache },
    save: { method: 'POST', interceptor },
  });
});
