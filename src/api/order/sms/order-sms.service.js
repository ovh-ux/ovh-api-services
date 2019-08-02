angular.module('ovh-api-services').service('OvhApiOrderSms', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiOrderSms');

  return {
    v6() {
      return $injector.get('OvhApiOrderSmsV6');
    },
    cache,
  };
});
