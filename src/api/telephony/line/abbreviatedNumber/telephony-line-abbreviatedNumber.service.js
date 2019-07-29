angular.module('ovh-api-services').service('OvhApiTelephonyLineAbbreviatedNumber', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiTelephonyLineAbbreviatedNumber');

  return {
    v6() {
      return $injector.get('OvhApiTelephonyLineAbbreviatedNumberV6');
    },
    Aapi() {
      return $injector.get('OvhApiTelephonyLineAbbreviatedNumberAapi');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
