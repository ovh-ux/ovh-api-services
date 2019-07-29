angular.module('ovh-api-services').service('OvhApiPackXdslVoipLine', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiPackXdslVoipLine');

  return {
    Aapi() {
      return $injector.get('OvhApiPackXdslVoipLineAapi');
    },
    v6() {
      return $injector.get('OvhApiPackXdslVoipLineV6');
    },
    v7() {
      return $injector.get('OvhApiPackXdslVoipLineV7');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
