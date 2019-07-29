angular.module('ovh-api-services').service('OvhApiPackXdslServiceInfo', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiPackXdslServiceInfo');

  return {
    Aapi() {
      return $injector.get('OvhApiPackXdslServiceInfoAapi');
    },
    v6: angular.noop,
    resetCache: cache.removeAll,
    cache,
  };
});
