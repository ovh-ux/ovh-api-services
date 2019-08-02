angular.module('ovh-api-services').service('OvhApiXdslNotificationsAapi', ($resource, OvhApiXdslNotifications) => {
  const xdslNotificationsAapi = $resource('/xdsl/:xdslId/monitoringNotifications', {
    xdslId: '@xdslId',
  }, {
    list: {
      method: 'GET',
      serviceType: 'aapi',
      isArray: true,
      cache: OvhApiXdslNotifications.cache,
    },
  });

  return xdslNotificationsAapi;
});
