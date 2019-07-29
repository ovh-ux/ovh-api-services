angular.module('ovh-api-services').service('OvhApiXdslModemUpnp', ($cacheFactory, $injector) => {
  const cache = $cacheFactory('OvhApiXdslModemUpnp');

  return {
    v6() {
      return $injector.get('OvhApiXdslModemUpnpV6');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
