angular.module('ovh-api-services').service('OvhApiTelephonyAbbreviatedNumber', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiTelephonyAbbreviatedNumber');

  return {
    v6() {
      return $injector.get('OvhApiTelephonyAbbreviatedNumberV6');
    },
    Aapi() {
      return $injector.get('OvhApiTelephonyAbbreviatedNumberAapi');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
