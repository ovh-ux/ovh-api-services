angular.module('ovh-api-services').service('OvhApiXdslModemCallWaiting', ($cacheFactory, $injector) => {
  const cache = $cacheFactory('OvhApiXdslModemCallWaiting');

  return {
    v6() {
      return $injector.get('OvhApiXdslModemCallWaitingV6');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
