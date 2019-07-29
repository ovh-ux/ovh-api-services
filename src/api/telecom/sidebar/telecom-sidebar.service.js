angular.module('ovh-api-services').service('OvhApiTelecomSidebar', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiTelecomSidebar');

  return {
    Aapi() {
      return $injector.get('OvhApiTelecomSidebarAapi');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
