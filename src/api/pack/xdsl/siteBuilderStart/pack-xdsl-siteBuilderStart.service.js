angular.module('ovh-api-services').service('OvhApiPackXdslSiteBuilderStart', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiPackXdslSiteBuilderStart');

  return {
    v6() {
      return $injector.get('OvhApiPackXdslSiteBuilderStartV6');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
