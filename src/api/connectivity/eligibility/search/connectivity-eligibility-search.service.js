angular.module('ovh-api-services').service('OvhApiConnectivityEligibilitySearch', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiConnectivityEligibilitySearch');

  return {
    v6() {
      return $injector.get('OvhApiConnectivityEligibilitySearchV6');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
