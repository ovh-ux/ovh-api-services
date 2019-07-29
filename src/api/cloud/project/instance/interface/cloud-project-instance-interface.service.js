angular.module('ovh-api-services').service('OvhApiCloudProjectInstanceInterface', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiCloudProjectInstanceInterface');

  return {
    v6() {
      return $injector.get('OvhApiCloudProjectInstanceInterfaceV6');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
