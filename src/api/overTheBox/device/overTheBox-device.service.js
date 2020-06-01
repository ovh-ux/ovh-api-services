angular.module('ovh-api-services').service('OvhApiOverTheBoxDevice', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiOverTheBoxDevice');

  return {
    v6() {
      return $injector.get('OvhApiOverTheBoxDeviceV6');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
