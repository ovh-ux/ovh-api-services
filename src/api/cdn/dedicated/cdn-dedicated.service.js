angular.module('ovh-api-services').service('OvhApiCdnDedicated', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiCdnDedicated');

  return {
    v6() {
      return $injector.get('OvhApiCdnDedicatedV6');
    },
    Domains() {
      return $injector.get('OvhApiCdnDedicatedDomains');
    },
    Ssl() {
      return $injector.get('OvhApiCdnDedicatedSsl');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
