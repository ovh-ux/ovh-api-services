angular.module('ovh-api-services').service('OvhApiXdslOrderFollowup', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiXdslOrderFollowup');

  return {
    Aapi() {
      return $injector.get('OvhApiXdslOrderFollowupAapi');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
