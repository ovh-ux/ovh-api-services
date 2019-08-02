angular.module('ovh-api-services').service('OvhApiPackXdslExchangeAccount', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiPackXdslExchangeAccount');

  return {
    Aapi() {
      return $injector.get('OvhApiPackXdslExchangeAccountAapi');
    },
    Services() {
      return $injector.get('OvhApiPackXdslExchangeAccountServices');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
