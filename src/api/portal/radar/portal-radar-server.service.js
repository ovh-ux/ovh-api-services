angular.module('ovh-api-services').service('OvhApiPortalRadarServer', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiPortalRadarServer');

  return {
    Aapi() {
      return $injector.get('OvhApiPortalRadarServerAapi');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
