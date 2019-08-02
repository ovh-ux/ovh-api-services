angular.module('ovh-api-services').service('OvhApiDedicatedCephTaskV6', ($resource, $cacheFactory) => {
  const queryCache = $cacheFactory('OvhApiDedicatedCephTaskV6');

  const resource = $resource('/dedicated/ceph/:serviceName/task/:taskId', {
    serviceName: '@serviceName',
    taskId: '@taskId',
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
  });

  resource.resetAllCache = function () {
    resource.resetQueryCache();
  };

  resource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return resource;
});
