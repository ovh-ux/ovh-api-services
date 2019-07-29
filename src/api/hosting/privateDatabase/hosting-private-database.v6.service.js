angular.module('ovh-api-services').service('OvhApiHostingPrivateDatabaseV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiHostingPrivateDatabaseV6Cache');

  const interceptor = {
    response(response) {
      cache.removeAll();
      return response;
    },
  };

  const resource = $resource('/hosting/privateDatabase/:serviceName', {
    serviceName: '@serviceName',
  }, {
    query: {
      method: 'GET',
      isArray: true,
      cache,
    },
    get: {
      method: 'GET',
      cache,
    },
    put: {
      method: 'PUT',
      interceptor,
    },
    availableOrderCapacities: {
      method: 'GET',
      url: '/hosting/privateDatabase/availableOrderCapacities',
      params: {
        offer: '@offer',
      },
    },
  });

  resource.resetAllCache = function () {
    resource.resetCache();
  };

  resource.resetCache = function () {
    cache.removeAll();
  };

  return resource;
});
