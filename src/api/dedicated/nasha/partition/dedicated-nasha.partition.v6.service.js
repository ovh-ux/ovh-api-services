angular.module('ovh-api-services').service('OvhApiDedicatedNashaPartitionV6', ($resource, $cacheFactory) => {
  const queryCache = $cacheFactory('OvhApiDedicatedNashaPartitionV6Query');

  const interceptor = {
    response(response) {
      queryCache.removeAll();
      return response;
    },
  };

  const resource = $resource('/dedicated/nasha/:serviceName/partition/:partitionName', {
    serviceName: '@serviceName',
    partitionName: '@partitionName',
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
    use: {
      method: 'GET',
      url: '/dedicated/nasha/:serviceName/partition/:partitionName/use',
      cache: queryCache,
      params: {
        type: '@type',
      },
    },
    create: {
      method: 'POST',
      interceptor,
      url: '/dedicated/nasha/:serviceName/partition',
      params: {
        partitionName: '@partitionName',
        protocol: '@protocol',
        size: '@size',
      },
    },
    update: {
      method: 'PUT',
      interceptor,
      params: {
        partitionName: '@partitionName',
        size: '@size',
      },
    },
    delete: {
      method: 'DELETE',
      interceptor,
    },
  });

  resource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return resource;
});
