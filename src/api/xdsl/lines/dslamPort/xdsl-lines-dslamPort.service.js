angular.module('ovh-api-services').service('OvhApiXdslLinesDslamPort', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiXdslLinesDslamPort');

  return {
    Aapi() {
      return $injector.get('OvhApiXdslLinesDslamPortAapi');
    },
    v6() {
      return $injector.get('OvhApiXdslLinesDslamPortV6');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
