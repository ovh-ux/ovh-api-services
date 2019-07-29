angular.module('ovh-api-services').service('OvhApiXdslModemPortV6', ($resource, OvhApiXdslModemPort) => {
  const interceptor = {
    response(response) {
      OvhApiXdslModemPort.resetCache();
      return response.resource;
    },
  };

  return $resource('/xdsl/:xdslId/modem/portMappings/:name', {
    xdslId: '@xdslId',
    name: '@name',
  }, {
    get: {
      method: 'GET',
      cache: OvhApiXdslModemPort.cache,
    },
    query: {
      method: 'GET',
      isArray: true,
      cache: OvhApiXdslModemPort.cache,
    },
    update: {
      method: 'PUT',
      interceptor,
    },
    post: {
      method: 'POST',
      url: '/xdsl/:xdslId/modem/portMappings',
      interceptor,
    },
  });
});
