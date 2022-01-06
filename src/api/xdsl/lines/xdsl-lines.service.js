angular.module('ovh-api-services').service('OvhApiXdslLines', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiXdslLines');

  return {
    v6() {
      return $injector.get('OvhApiXdslLinesV6');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
