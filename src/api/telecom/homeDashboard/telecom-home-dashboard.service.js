angular.module('ovh-api-services').service('OvhApiTelecomHomeDashboard', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiTelecomHomeDashboard');

  return {
    Aapi() {
      return $injector.get('OvhApiTelecomHomeDashboardAapi');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
