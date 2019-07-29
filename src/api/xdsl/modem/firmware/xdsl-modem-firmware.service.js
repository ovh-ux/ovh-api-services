angular.module('ovh-api-services').service('OvhApiXdslModemFirmware', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiXdslModemFirmware');

  return {
    v6() {
      return $injector.get('OvhApiXdslModemFirmwareV6');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
