angular.module('ovh-api-services').service('OvhApiOverTheBox', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiOverTheBox');

  return {
    v6() {
      return $injector.get('OvhApiOverTheBoxV6');
    },
    Aapi() {
      return $injector.get('OvhApiOverTheBoxAapi');
    },
    Device() {
      return $injector.get('OvhApiOverTheBoxDevice');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
