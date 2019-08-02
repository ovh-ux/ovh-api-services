angular.module('ovh-api-services').service('OvhApiXdslLines', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiXdslLines');

  return {
    v6() {
      return $injector.get('OvhApiXdslLinesV6');
    },
    v7() {
      return $injector.get('OvhApiXdslLinesV7');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
