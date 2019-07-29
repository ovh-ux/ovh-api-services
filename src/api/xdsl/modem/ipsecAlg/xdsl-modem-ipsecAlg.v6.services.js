angular.module('ovh-api-services').service('OvhApiXdslModemIpsecAlgV6', ($resource, OvhApiXdslModemIpsecAlg) => {
  const interceptor = {
    response(response) {
      OvhApiXdslModemIpsecAlg.resetCache();
      return response.resource;
    },
  };

  return $resource('/xdsl/:xdslId/modem/ipsecAlg', {
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
