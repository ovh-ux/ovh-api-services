angular.module('ovh-api-services').service('OvhApiDedicatedCloudUserV6', ($resource, $cacheFactory) => {
  const queryCache = $cacheFactory('OvhApiDedicatedCloudUserV6Query');
  const cache = $cacheFactory('OvhApiDedicatedCloudUserV6');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.data;
    },
  };

  const userResource = $resource('/dedicatedCloud/:serviceName/user/:userId', {
    serviceName: '@serviceName',
    userId: '@userId',
  }, {
    get: { method: 'GET', cache },
    query: {
      method: 'GET',
      cache: queryCache,
      isArray: true,
      params: {
        name: '@name',
      },
    },
    save: { method: 'POST', interceptor },
    delete: { method: 'DELETE', interceptor },
    changeProperties: {
      url: '/dedicatedCloud/:serviceName/user/:userId/changeProperties',
      method: 'POST',
      interceptor,
    },
  });

  userResource.resetCache = function () {
    cache.removeAll();
  };

  userResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return userResource;
});
