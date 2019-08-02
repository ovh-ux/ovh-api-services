angular.module('ovh-api-services').service('OvhApiXdslTemplateModem', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiXdslTemplateModem');

  return {
    v6() {
      return $injector.get('OvhApiXdslTemplateModemV6');
    },
    resetCache() {
      cache.removeAll();
    },
    cache,
  };
});
