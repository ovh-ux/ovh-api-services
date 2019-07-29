angular.module('ovh-api-services').service('OvhApiXdslModemSipAlg', ($cacheFactory, $injector) => {
  const cache = $cacheFactory('OvhApiXdslModemSipAlg');

  return {
    v6() {
      return $injector.get('OvhApiXdslModemSipAlgV6');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
