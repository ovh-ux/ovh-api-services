angular.module('ovh-api-services').service('OvhApiDedicatedCephUserV6', ($resource, $cacheFactory, OvhApiDedicatedCephUserAapi) => {
  const queryCache = $cacheFactory('OvhApiDedicatedCephUserV6');

  const interceptor = {
    response(response) {
      queryCache.removeAll();
      return response;
    },
  };

  const resource = $resource('/dedicated/ceph/:serviceName/user/:userName', {
    serviceName: '@serviceName',
    userName: '@userName',
  }, {
    query: {
      method: 'GET',
      cache: queryCache,
      isArray: true,
    },
    get: {
      method: 'GET',
      cache: queryCache,
    },
    post: {
      method: 'POST',
      interceptor,
      url: '/dedicated/ceph/:serviceName/user',
      params: {
        userName: '@userName',
      },
    },
    delete: {
      method: 'DELETE',
      interceptor,
    },
  });

  resource.resetAllCache = function () {
    resource.resetQueryCache();
    OvhApiDedicatedCephUserAapi.resetAllCache();
  };

  resource.resetQueryCache = function () {
    queryCache.removeAll();
    OvhApiDedicatedCephUserAapi.resetCache();
  };

  return resource;
});
