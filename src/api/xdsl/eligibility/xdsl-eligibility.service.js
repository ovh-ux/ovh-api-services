angular.module('ovh-api-services').service('OvhApiXdslEligibility', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiXdslEligibility');

  return {
    v6() {
      return $injector.get('OvhApiXdslEligibilityV6');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
