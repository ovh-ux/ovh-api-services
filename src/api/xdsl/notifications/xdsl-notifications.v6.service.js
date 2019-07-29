angular.module('ovh-api-services').service('OvhApiXdslNotificationsV6', ($resource, OvhApiXdslNotifications) => {
  const interceptor = {
    response(response) {
      OvhApiXdslNotifications.resetCache();
      return response.resource;
    },
  };

  return $resource('/xdsl/:xdslId/monitoringNotifications', {
    xdslId: '@xdslId',
    id: '@id',
  }, {
    query: {
      method: 'GET',
      isArray: true,
      cache: OvhApiXdslNotifications.cache,
    },
    add: {
      method: 'POST',
      interceptor,
    },
    remove: {
      url: '/xdsl/:xdslId/monitoringNotifications/:id',
      method: 'DELETE',
      interceptor,
    },
    update: {
      url: '/xdsl/:xdslId/monitoringNotifications/:id',
      method: 'PUT',
      interceptor,
    },
  });
});
