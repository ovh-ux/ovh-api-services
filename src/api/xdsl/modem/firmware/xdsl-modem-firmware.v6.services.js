angular.module('ovh-api-services').service('OvhApiXdslModemFirmwareV6', ($resource, OvhApiXdslModemFirmware) => {
  const interceptor = {
    response(response) {
      OvhApiXdslModemFirmware.resetCache();
      return response.resource;
    },
  };

  return $resource('/xdsl/:xdslId/modem/firmware', {
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
    available: {
      method: 'GET',
      url: '/xdsl/:xdslId/modem/firmwareAvailable',
      isArray: true,
      cache: OvhApiXdslModemFirmware.cache,
    },
  });
});
