

angular.module('ovh-api-services').service('OvhApiPackXdslHostedEmail', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiPackXdslHostedEmail');

  return {
    v6() {
      return $injector.get('OvhApiPackXdslHostedEmailV6');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
