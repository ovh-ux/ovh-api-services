angular.module('ovh-api-services').service('OvhApiXdslModemFtpV6', ($resource, OvhApiXdslModemFtp) => {
  const interceptor = {
    response(response) {
      OvhApiXdslModemFtp.resetCache();
      return response.resource;
    },
  };

  return $resource('/xdsl/:xdslId/modem/ftp', {
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
