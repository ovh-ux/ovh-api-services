angular.module('ovh-api-services').service('OvhApiCdnWebsite', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiCdnWebsite');

  return {
    v6() {
      return $injector.get('OvhApiCdnWebsiteV6');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
