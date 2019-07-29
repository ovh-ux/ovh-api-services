angular.module('ovh-api-services').service('OvhApiTelecomPreferences', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiTelecomPreferences');

  return {
    Aapi() {
      return $injector.get('OvhApiTelecomPreferencesAapi');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
