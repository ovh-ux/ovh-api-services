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
  });
});
