angular.module('ovh-api-services').service('OvhApiDedicatedNashaPartitionCustomSnapshotV6', ($resource, $cacheFactory) => {
  const queryCache = $cacheFactory('OvhApiDedicatedNashaPartitionCustomSnapshotV6Query');

  const interceptor = {
    response(response) {
      queryCache.removeAll();
      return response;
    },
  };

  const resource = $resource('/dedicated/nasha/:serviceName/partition/:partitionName/customSnapshot/:name', {
    serviceName: '@serviceName',
    partitionName: '@partitionName',
    name: '@name',
  }, {
    query: {
      method: 'GET',
      isArray: true,
      cache: queryCache,
    },
    get: {
      method: 'GET',
      cache: queryCache,
    },
    add: {
      url: '/dedicated/nasha/:serviceName/partition/:partitionName/customSnapshot',
      method: 'POST',
      interceptor,
      params: {
        name: '@name',
        expiration: '@expiration',
      },
    },
    remove: {
      method: 'DELETE',
      interceptor,
    },
  });

  resource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return resource;
});
