angular.module('ovh-api-services').service('OvhApiDedicatedCloudUserRightV6', ($resource, $cacheFactory) => {
  const queryCache = $cacheFactory('OvhApiDedicatedCloudUserRightV6Query');
  const cache = $cacheFactory('OvhApiDedicatedCloudUserRightV6');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.data;
    },
  };

  const userRightResource = $resource('/dedicatedCloud/:serviceName/user/:userId/right/:rightId', {
    serviceName: '@serviceName',
    userId: '@userId',
    rightId: '@rightId',
  }, {
    get: { method: 'GET', cache },
    query: { method: 'GET', cache: queryCache, isArray: true },
    put: { method: 'PUT', interceptor },
  });

  userRightResource.resetCache = function () {
    cache.removeAll();
  };

  userRightResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return userRightResource;
});
