angular.module('ovh-api-services').service('OvhApiTelephonyTimeCondition', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiTelephonyTimeCondition');

  return {
    v6() {
      return $injector.get('OvhApiTelephonyTimeConditionV6');
    },
    Aapi() {
      return $injector.get('OvhApiTelephonyTimeConditionAapi');
    },
    Condition() {
      return $injector.get('OvhApiTelephonyTimeConditionCondition');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
