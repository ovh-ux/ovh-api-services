angular.module('ovh-api-services').service('OvhApiDedicatedCloudUserObjectRightV6', ($resource, $cacheFactory) => {
  const queryCache = $cacheFactory('OvhApiDedicatedCloudUserObjectRightV6Query');
  const cache = $cacheFactory('OvhApiDedicatedCloudUserObjectRightV6');

  const objectRightResource = $resource('/dedicatedCloud/:serviceName/user/:userId/objectRight/:objectRightId', {
    serviceName: '@serviceName',
    userId: '@userId',
    rightId: '@objectRightId',
  }, {
    get: { method: 'GET', cache },
    query: { method: 'GET', cache: queryCache, isArray: true },
  });

  objectRightResource.resetCache = function () {
    cache.removeAll();
  };

  objectRightResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return objectRightResource;
});
