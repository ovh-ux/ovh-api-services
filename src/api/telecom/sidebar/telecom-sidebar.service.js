angular.module('ovh-api-services').service('OvhApiTelecomSidebar', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiTelecomSidebar');

  return {
    resetCache: cache.removeAll,
    cache,
  };
});
