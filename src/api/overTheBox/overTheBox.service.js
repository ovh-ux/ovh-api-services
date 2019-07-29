angular.module('ovh-api-services').service('OvhApiOverTheBox', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiOverTheBox');

  return {
    v6() {
      return $injector.get('OvhApiOverTheBoxV6');
    },
    Aapi() {
      return $injector.get('OvhApiOverTheBoxAapi');
    },
    v7() {
      return $injector.get('OvhApiOverTheBoxV7');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
