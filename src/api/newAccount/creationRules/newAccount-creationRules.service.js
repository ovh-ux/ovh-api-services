angular.module('ovh-api-services').service('OvhApiNewAccountCreationRules', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiNewAccountCreationRulesV6');

  return {
    v6() {
      return $injector.get('OvhApiNewAccountCreationRulesV6');
    },
    cache,
    resetCache: cache.removeAll,
  };
});
