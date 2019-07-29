angular.module('ovh-api-services').service('OvhApiDedicatedNashaTaskV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiDedicatedNashaTaskV6Query');

  const resource = $resource('/dedicated/nasha/:serviceName/task/:taskId', {
    serviceName: '@serviceName',
    taskId: '@taskId',
  }, {
    query: {
      method: 'GET',
      isArray: true,
      params: {
        operation: '@operation',
        status: '@status',
      },
    },
    get: {
      method: 'GET',
      cache,
    },
  });

  resource.resetCache = function () {
    cache.removeAll();
  };

  return resource;
});
