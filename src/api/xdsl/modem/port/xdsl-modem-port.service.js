angular.module('ovh-api-services').service('OvhApiXdslModemPort', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiXdslModemPort');

  return {
    v6() {
      return $injector.get('OvhApiXdslModemPortV6');
    },
    Aapi() {
      return $injector.get('OvhApiXdslModemPortAapi');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
