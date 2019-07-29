angular.module('ovh-api-services').service('OvhApiCdnWebstorage', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiCdnWebstorage');

  return {
    v6() {
      return $injector.get('OvhApiCdnWebstorageV6');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
