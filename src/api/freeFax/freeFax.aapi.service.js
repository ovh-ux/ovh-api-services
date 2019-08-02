angular.module('ovh-api-services').service('OvhApiFreeFaxAapi', ($resource, $cacheFactory, OvhApiFreeFax) => {
  const interceptor = {
    response(response) {
      OvhApiFreeFax.resetCache();
      return response.resource;
    },
  };

  const freeFaxAapi = $resource('/freefax/:serviceName', {
    serviceName: '@serviceName',
  }, {
    notifications: {
      method: 'GET',
      url: '/freefax/notifications/:serviceName',
      serviceType: 'aapi',
      isArray: true,
      cache: OvhApiFreeFax.cache,
    },
    notificationsUpdate: {
      method: 'PUT',
      url: '/freefax/notifications/:serviceName/update',
      serviceType: 'aapi',
      interceptor,
    },
    details: {
      method: 'GET',
      serviceType: 'aapi',
      url: '/freefax/:serviceName/details',
      cache: OvhApiFreeFax.cache,
    },
  });

  return freeFaxAapi;
});
