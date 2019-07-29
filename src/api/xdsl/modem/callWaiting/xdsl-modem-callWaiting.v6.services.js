angular.module('ovh-api-services').service('OvhApiXdslModemCallWaitingV6', ($resource, OvhApiXdslModemCallWaiting) => {
  const interceptor = {
    response(response) {
      OvhApiXdslModemCallWaiting.resetCache();
      return response.resource;
    },
  };

  return $resource('/xdsl/:xdslId/modem/callWaiting', {
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
