angular.module('ovh-api-services').service('OvhApiFreeFax', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiFreeFax');

  return {
    v6() {
      return $injector.get('OvhApiFreeFaxV6');
    },
    Aapi() {
      return $injector.get('OvhApiFreeFaxAapi');
    },
    v7() {
      return $injector.get('OvhApiFreeFaxV7');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
