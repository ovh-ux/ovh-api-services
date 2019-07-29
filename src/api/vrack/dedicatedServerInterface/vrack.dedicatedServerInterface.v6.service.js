angular.module('ovh-api-services').service('OvhApiDedicatedServerInterfaceV6', ($resource, $cacheFactory, OvhApiVrack) => {
  const queryCache = $cacheFactory('OvhApiDedicatedServerInterfaceV6Query');

  const interceptor = {
    response(response) {
      queryCache.removeAll();
      OvhApiVrack.Aapi().resetAllCache();
      return response;
    },
  };

  const resource = $resource('/vrack/:serviceName/dedicatedServerInterface/:dedicatedServerInterface', {
    serviceName: '@serviceName',
  }, {
    query: {
      method: 'GET',
      cache: queryCache,
      isArray: true,
    },
    details: {
      method: 'GET',
      cache: queryCache,
      url: '/vrack/:serviceName/dedicatedServerInterfaceDetails',
      params: {
        serviceName: '@serviceName',
      },
      isArray: true,
    },
    get: {
      method: 'GET',
      cache: queryCache,
      isArray: false,
    },
    post: {
      method: 'POST',
      interceptor,
      url: '/vrack/:serviceName/dedicatedServerInterface',
    },
    delete: {
      method: 'DELETE',
      interceptor,
    },
  });

  resource.resetAllCache = function () {
    resource.resetQueryCache();
    OvhApiVrack.Aapi().resetAllCache();
  };

  resource.resetQueryCache = function () {
    queryCache.removeAll();
    OvhApiVrack.Aapi().resetAllCache();
  };

  return resource;
});
