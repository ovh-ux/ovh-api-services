angular.module('ovh-api-services').service('OvhApiVrackPublicCloud', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiVrackPublicCloud');

  return {
    v6() {
      return $injector.get('OvhApiVrackPublicCloudV6');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
