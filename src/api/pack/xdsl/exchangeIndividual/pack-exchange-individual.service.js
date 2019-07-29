angular.module('ovh-api-services').service('OvhApiPackXdslExchangeIndividual', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiPackXdslExchangeIndividual');

  return {
    v6() {
      return $injector.get('OvhApiPackXdslExchangeIndividualV6');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
