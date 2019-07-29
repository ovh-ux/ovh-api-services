angular.module('ovh-api-services').service('OvhApiTelephonyLineOptions', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiTelephonyLineOptions');

  return {
    v6() {
      return $injector.get('OvhApiTelephonyLineOptionsV6');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
