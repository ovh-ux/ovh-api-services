angular.module('ovh-api-services').service('OvhApiConnectivityEligibility', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiConnectivityEligibility');

  return {
    v6() {
      return $injector.get('OvhApiConnectivityEligibilityV6');
    },
    Search() {
      return $injector.get('OvhApiConnectivityEligibilitySearch');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
