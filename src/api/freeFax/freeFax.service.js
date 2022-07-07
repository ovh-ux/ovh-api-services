angular.module('ovh-api-services').service('OvhApiFreeFax', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiFreeFax');

  return {
    v6() {
      return $injector.get('OvhApiFreeFaxV6');
    },
    Aapi() {
      return $injector.get('OvhApiFreeFaxAapi');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
