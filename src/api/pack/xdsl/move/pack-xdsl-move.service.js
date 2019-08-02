angular.module('ovh-api-services').service('OvhApiPackXdslMove', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiPackXdslMove');

  return {
    Aapi: angular.noop,
    v6() {
      return $injector.get('OvhApiPackXdslMoveV6');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
