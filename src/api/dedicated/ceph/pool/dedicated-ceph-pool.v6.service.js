angular.module('ovh-api-services').service('OvhApiDedicatedCephPoolV6', ($resource, $cacheFactory) => {
  const queryCache = $cacheFactory('OvhApiDedicatedCephPoolV6');

  const interceptor = {
    response(response) {
      queryCache.removeAll();
      return response;
    },
  };

  const resource = $resource('/dedicated/ceph/:serviceName/pool/:poolName', {
    serviceName: '@serviceName',
    poolName: '@poolName',
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
      url: '/dedicated/ceph/:serviceName/pool',
      params: {
        poolName: '@poolName',
      },
    },
    delete: {
      method: 'DELETE',
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
