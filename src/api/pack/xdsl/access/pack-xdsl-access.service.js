angular.module('ovh-api-services').service('OvhApiPackXdslAccess', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiPackXdslAccess');

  return {
    Aapi() {
      return $injector.get('OvhApiPackXdslAccessAapi');
    },
    v6() {
      return $injector.get('OvhApiPackXdslAccessV6');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
