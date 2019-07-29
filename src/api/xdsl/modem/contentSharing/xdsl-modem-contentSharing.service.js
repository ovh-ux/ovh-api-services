angular.module('ovh-api-services').service('OvhApiXdslModemContentSharing', ($cacheFactory, $injector) => {
  const cache = $cacheFactory('OvhApiXdslModemContentSharing');

  return {
    v6() {
      return $injector.get('OvhApiXdslModemContentSharingV6');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
