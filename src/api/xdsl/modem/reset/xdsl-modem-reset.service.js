angular.module('ovh-api-services').service('OvhApiXdslModemReset', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiXdslModemReset');

  return {
    v6() {
      return $injector.get('OvhApiXdslModemResetV6');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
