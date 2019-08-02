angular.module('ovh-api-services').service('OvhApiXdslModemLan', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiXdslModemLan');

  return {
    v6() {
      return $injector.get('OvhApiXdslModemLanV6');
    },
    Aapi() {
      return $injector.get('OvhApiXdslModemLanAapi');
    },
    Dhcp() {
      return $injector.get('OvhApiXdslModemLanDhcp');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
