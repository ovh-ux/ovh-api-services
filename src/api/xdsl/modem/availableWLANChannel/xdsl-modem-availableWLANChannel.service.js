angular.module('ovh-api-services').service('OvhApiXdslModemAvailableWLANChannel', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiXdslModemAvailableWLANChannel');

  return {
    v6() {
      return $injector.get('OvhApiXdslModemAvailableWLANChannelV6');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
