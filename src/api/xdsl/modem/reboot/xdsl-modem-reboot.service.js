angular.module('ovh-api-services').service('OvhApiXdslModemReboot', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiXdslModemReboot');

  return {
    v6() {
      return $injector.get('OvhApiXdslModemRebootV6');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
