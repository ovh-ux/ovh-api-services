angular.module('ovh-api-services').service('OvhApiPackXdslDomainActivation', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiPackXdslDomainActivation');

  return {
    v6() {
      return $injector.get('OvhApiPackXdslDomainActivationV6');
    },
    Aapi() {
      return $injector.get('OvhApiPackXdslDomainActivationAapi');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
