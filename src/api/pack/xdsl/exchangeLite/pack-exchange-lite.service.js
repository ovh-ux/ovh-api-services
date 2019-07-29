angular.module('ovh-api-services').service('OvhApiPackXdslExchangeLite', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiPackXdslExchangeLite');

  return {
    v6() {
      return $injector.get('OvhApiPackXdslExchangeLiteV6');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
