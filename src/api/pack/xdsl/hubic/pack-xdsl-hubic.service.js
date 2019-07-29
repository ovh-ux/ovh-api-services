angular.module('ovh-api-services').service('OvhApiPackXdslHubic', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiPackXdslHubic');

  return {
    Aapi() {
      return $injector.get('OvhApiPackXdslHubicAapi');
    },
    v6() {
      return $injector.get('OvhApiPackXdslHubicV6');
    },
    v7() {
      return $injector.get('OvhApiPackXdslHubicV7');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
