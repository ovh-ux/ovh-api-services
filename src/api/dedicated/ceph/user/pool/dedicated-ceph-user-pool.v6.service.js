angular.module('ovh-api-services').service('OvhApiDedicatedCephUserPoolV6', ($resource, $cacheFactory) => {
  const queryCache = $cacheFactory('OvhApiDedicatedCephUserPoolV6');

  const interceptor = {
    response(response) {
      queryCache.removeAll();
      return response;
    },
  };

  const resource = $resource('/dedicated/ceph/:serviceName/user/:userName/pool', {
    serviceName: '@serviceName',
    userName: '@userName',
  }, {
    query: {
      method: 'GET',
      cache: queryCache,
      isArray: true,
    },
    post: {
      method: 'POST',
      interceptor,
    },
    put: {
      method: 'PUT',
      interceptor,
    },
  });

  resource.resetAllCache = function () {
    resource.resetQueryCache();
  };

  resource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return resource;
});
