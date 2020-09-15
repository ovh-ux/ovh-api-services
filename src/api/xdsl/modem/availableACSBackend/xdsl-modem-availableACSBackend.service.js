angular.module('ovh-api-services').service('OvhApiXdslModemAvailableACSBackend', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiXdslModemAvailableACSBackend');

  return {
    v6() {
      return $injector.get('OvhApiXdslModemAvailableACSBackendV6');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
