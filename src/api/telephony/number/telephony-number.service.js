angular.module('ovh-api-services').service('OvhApiTelephonyNumber', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiTelephonyNumber');

  return {
    Aapi() {
      return $injector.get('OvhApiTelephonyNumberAapi');
    },
    v6() {
      return $injector.get('OvhApiTelephonyNumberV6');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
