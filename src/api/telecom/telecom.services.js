angular.module('ovh-api-services').service('OvhApiTelecom', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiTelecom');

  return {
    resetCache: cache.removeAll,
    cache,
    HomeDashboard() {
      return $injector.get('OvhApiTelecomHomeDashboard');
    },
    Preferences() {
      return $injector.get('OvhApiTelecomPreferences');
    },
  };
});
