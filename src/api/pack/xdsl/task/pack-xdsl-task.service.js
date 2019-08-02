angular.module('ovh-api-services').service('OvhApiPackXdslTask', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiPackXdslTask');

  return {
    Aapi() {
      return $injector.get('OvhApiPackXdslTaskAapi');
    },
    v6() {
      return $injector.get('OvhApiPackXdslTaskV6');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
