angular.module('ovh-api-services').service('OvhApiTelephonyLineClick2CallUser', ($cacheFactory, $injector) => {
  const cache = $cacheFactory('OvhApiTelephonyLineClick2CallUser');
  return {
    v6() {
      return $injector.get('OvhApiTelephonyLineClick2CallUserV6');
    },
    Aapi: angular.noop,
    resetCache: cache.removeAll,
    cache,
  };
});
