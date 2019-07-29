angular.module('ovh-api-services').service('OvhApiXdslModemContentSharingV6', ($resource, OvhApiXdslModemContentSharing) => {
  const interceptor = {
    response(response) {
      OvhApiXdslModemContentSharing.resetCache();
      return response.resource;
    },
  };

  return $resource('/xdsl/:xdslId/modem/contentSharing', {
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
