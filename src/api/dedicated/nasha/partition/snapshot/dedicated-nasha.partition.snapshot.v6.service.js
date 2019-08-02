angular.module('ovh-api-services').service('OvhApiDedicatedNashaPartitionSnapshotV6', ($resource, $cacheFactory) => {
  const queryCache = $cacheFactory('OvhApiDedicatedNashaPartitionSnapshotV6Query');

  const interceptor = {
    response(response) {
      queryCache.removeAll();
      return response;
    },
  };

  const resource = $resource('/dedicated/nasha/:serviceName/partition/:partitionName/snapshot', {
    serviceName: '@serviceName',
    partitionName: '@partitionName',
    snapshotType: '@snapshotType',
  }, {
    query: {
      method: 'GET',
      isArray: true,
      cache: queryCache,
    },
    get: {
      method: 'GET',
      url: '/dedicated/nasha/:serviceName/partition/:partitionName/snapshot/:snapshotType',
    },
    add: {
      method: 'POST',
      interceptor,
      params: {
        snapshotType: '@snapshotType',
      },
    },
    remove: {
      method: 'DELETE',
      interceptor,
      url: '/dedicated/nasha/:serviceName/partition/:partitionName/snapshot/:snapshotType',
    },
  });

  resource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return resource;
});
