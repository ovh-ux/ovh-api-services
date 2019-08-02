angular.module('ovh-api-services').service('OvhApiOrderTelephony', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiOrderTelephony');

  return {
    v6() {
      return $injector.get('OvhApiOrderTelephonyV6');
    },
    Aapi() {
      return $injector.get('OvhApiOrderTelephonyAapi');
    },
    cache,
  };
});
