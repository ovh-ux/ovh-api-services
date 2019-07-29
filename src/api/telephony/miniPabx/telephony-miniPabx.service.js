angular.module('ovh-api-services').service('OvhApiTelephonyMiniPabx', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiTelephonyMiniPabx');

  return {
    v6() {
      return $injector.get('OvhApiTelephonyMiniPabxV6');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
