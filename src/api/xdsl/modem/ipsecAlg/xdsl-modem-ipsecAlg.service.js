angular.module('ovh-api-services').service('OvhApiXdslModemIpsecAlg', ($cacheFactory, $injector) => {
  const cache = $cacheFactory('OvhApiXdslModemIpsecAlg');

  return {
    v6() {
      return $injector.get('OvhApiXdslModemIpsecAlgV6');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
