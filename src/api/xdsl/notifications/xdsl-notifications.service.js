angular.module('ovh-api-services').service('OvhApiXdslNotifications', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiXdslNotifications');

  return {
    v6() {
      return $injector.get('OvhApiXdslNotificationsV6');
    },
    Aapi() {
      return $injector.get('OvhApiXdslNotificationsAapi');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
