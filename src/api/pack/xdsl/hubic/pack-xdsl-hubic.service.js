angular.module('ovh-api-services').service('OvhApiPackXdslHubic', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiPackXdslHubic');

  return {
    Aapi() {
      return $injector.get('OvhApiPackXdslHubicAapi');
    },
    v6() {
      return $injector.get('OvhApiPackXdslHubicV6');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
