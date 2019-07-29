angular.module('ovh-api-services').service('OvhApiPackXdslVoipBillingAccount', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiPackXdslVoipBillingAccount');

  return {
    v6() {
      return $injector.get('OvhApiPackXdslVoipBillingAccountV6');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
