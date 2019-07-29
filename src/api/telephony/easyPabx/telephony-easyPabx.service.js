angular.module('ovh-api-services').service('OvhApiTelephonyEasyPabx', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiTelephonyEasyPabx');

  return {
    v6() {
      return $injector.get('OvhApiTelephonyEasyPabxV6');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
