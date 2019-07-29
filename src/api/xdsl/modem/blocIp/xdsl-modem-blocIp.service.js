angular.module('ovh-api-services').service('OvhApiXdslModemBlocIp', ($cacheFactory, $injector) => {
  const cache = $cacheFactory('OvhApiXdslModemBlocIp');

  return {
    v6() {
      return $injector.get('OvhApiXdslModemBlocIpV6');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
