angular.module('ovh-api-services').service('OvhApiXdslModemDevices', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiXdslModemDevices');

  return {
    v6: angular.noop,
    Aapi() {
      return $injector.get('OvhApiXdslModemDevicesAapi');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
