angular.module('ovh-api-services').service('OvhApiXdslModemV6', ($resource, OvhApiXdslModem) => {
  const interceptor = {
    response(response) {
      OvhApiXdslModem.resetCache();
      return response.resource;
    },
  };

  return $resource('/xdsl/:xdslId/modem', {
    xdslId: '@xdslId',
  }, {
    get: {
      method: 'GET',
      cache: OvhApiXdslModem.cache,
    },
    update: {
      method: 'PUT',
      interceptor,
    },
    reconfigureVoip: {
      method: 'POST',
      url: '/xdsl/:xdslId/modem/reconfigureVoip',
      interceptor,
    }
  });
});
