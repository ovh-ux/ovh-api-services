angular.module('ovh-api-services').service('OvhApiXdslModemFtp', ($cacheFactory, $injector) => {
  const cache = $cacheFactory('OvhApiXdslModemFtp');

  return {
    v6() {
      return $injector.get('OvhApiXdslModemFtpV6');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
