angular.module('ovh-api-services').service('OvhApiXdslModemLanV6', ($resource, OvhApiXdslModemLan) => {
  const interceptor = {
    response(response) {
      OvhApiXdslModemLan.resetCache();
      return response.resource;
    },
  };

  return $resource('/xdsl/:xdslId/modem/lan/:lanName', {
    xdslId: '@xdslId',
    lanName: '@lanName',
  }, {
    get: {
      method: 'GET',
      cache: OvhApiXdslModemLan.cache,
    },
    update: {
      method: 'PUT',
      interceptor,
    },
  });
});
