angular.module('ovh-api-services').service('OvhApiXdslModemBlocIpV6', ($resource, OvhApiXdslModemBlocIp) => {
  const interceptor = {
    response(response) {
      OvhApiXdslModemBlocIp.resetCache();
      return response.resource;
    },
  };

  return $resource('/xdsl/:xdslId/modem/blocIp', {
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
