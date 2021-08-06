angular.module('ovh-api-services').service('OvhApiCloudProjectInstance', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiCloudProjectInstance');

  return {
    v6() {
      return $injector.get('OvhApiCloudProjectInstanceV6');
    },
    Interface() {
      return $injector.get('OvhApiCloudProjectInstanceInterface');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
