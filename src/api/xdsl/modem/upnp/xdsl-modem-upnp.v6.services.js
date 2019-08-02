angular.module('ovh-api-services').service('OvhApiXdslModemUpnpV6', ($resource, OvhApiXdslModemUpnp) => {
  const interceptor = {
    response(response) {
      OvhApiXdslModemUpnp.resetCache();
      return response.resource;
    },
  };

  return $resource('/xdsl/:xdslId/modem/upnp', {
    xdslId: '@xdslId',
  }, {
    get: {
      method: 'GET',
      transformResponse(data, headers, status) {
        if (status === 200) {
          return { data: angular.fromJson(data) };
        }
        return data;
      },
    },
    post: {
      method: 'POST',
      interceptor,
    },
  });
});
