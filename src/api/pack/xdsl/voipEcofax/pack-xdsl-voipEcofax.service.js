angular.module('ovh-api-services').service('OvhApiPackXdslVoipEcofax', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiPackXdslVoipEcofax');

  return {
    v6() {
      return $injector.get('OvhApiPackXdslVoipEcofaxV6');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
