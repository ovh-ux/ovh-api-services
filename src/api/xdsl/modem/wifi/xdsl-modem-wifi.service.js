angular.module('ovh-api-services').service('OvhApiXdslModemWifi', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiXdslModemWifi');

  return {
    v6() {
      return $injector.get('OvhApiXdslModemWifiV6');
    },
    Aapi() {
      return $injector.get('OvhApiXdslModemWifiAapi');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
