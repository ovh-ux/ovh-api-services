angular.module('ovh-api-services').service('OvhApiFreeFaxV6', ($resource, $cacheFactory, OvhApiFreeFax) => {
  const interceptor = {
    response(response) {
      OvhApiFreeFax.resetCache();
      return response.resource;
    },
  };

  return $resource('/freefax/:serviceName', {
    serviceName: '@serviceName',
  }, {
    schema: {
      method: 'GET',
      url: '/freefax.json',
    },
    query: {
      method: 'GET',
      url: '/freefax',
      isArray: true,
      cache: OvhApiFreeFax.cache,
    },
    getPrice: {
      method: 'GET',
      url: '/order/freefax/new',
      cache: OvhApiFreeFax.cache,
    },
    orderCredits: {
      method: 'POST',
      url: '/order/freefax/new',
      interceptor,
    },
    voiceMailGet: {
      method: 'GET',
      url: '/freefax/:serviceName/voicemail',
    },
    voiceMailGetRouting: {
      method: 'GET',
      isArray: false,
      url: '/freefax/:serviceName/voicemail/routing',
      transformResponse(resp, headers, status) {
        let data = resp;

        if (status === 200) {
          data = {
            value: angular.fromJson(data),
          };
        }
        return data;
      },
    },
    voiceMailChangeRouting: {
      method: 'POST',
      url: '/freefax/:serviceName/voicemail/changeRouting',
      interceptor,
    },
    voiceMailPut: {
      method: 'PUT',
      url: '/freefax/:serviceName/voicemail',
      interceptor,
    },
    changePassword: {
      method: 'POST',
      url: '/freefax/:serviceName/voicemail/changePassword',
    },
    resetPassword: {
      method: 'POST',
      url: '/freefax/:serviceName/changePassword',
      transformResponse(resp, headers, status) {
        let data = resp;

        if (status === 200) {
          data = {
            value: angular.fromJson(data),
          };
        }
        return data;
      },
    },
    saveConfiguration: {
      method: 'PUT',
      url: '/freefax/:serviceName',
      interceptor,
    },
  });
});
