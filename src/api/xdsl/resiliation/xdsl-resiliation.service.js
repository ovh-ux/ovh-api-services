angular.module('ovh-api-services').service('OvhApiXdslResiliation', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiXdslResiliation');

  return {
    Aapi() {
      return $injector.get('OvhApiXdslResiliationAapi');
    },
    v6() {
      return $injector.get('OvhApiXdslResiliationV6');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
