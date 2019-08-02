angular.module('ovh-api-services').service('OvhApiPackXdslResiliation', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiPackXdslResiliation');

  return {
    Aapi() {
      return $injector.get('OvhApiPackXdslResiliationAapi');
    },
    v6() {
      return $injector.get('OvhApiPackXdslResiliationV6');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
