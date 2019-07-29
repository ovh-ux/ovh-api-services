angular.module('ovh-api-services').service('OvhApiXdslIps', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiXdslIps');

  return {
    v6() {
      return $injector.get('OvhApiXdslIpsV6');
    },
    Aapi() {
      return $injector.get('OvhApiXdslIpsAapi');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
