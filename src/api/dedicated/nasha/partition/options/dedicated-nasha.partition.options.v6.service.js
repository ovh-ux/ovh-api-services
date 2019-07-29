angular.module('ovh-api-services').service('OvhApiDedicatedNashaPartitionOptionsV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiDedicatedNashaPartitionOptionsV6');

  const interceptor = {
    response(response) {
      cache.removeAll();
      return response;
    },
  };

  const resource = $resource('/dedicated/nasha/:serviceName/partition/:partitionName/options', {
    serviceName: '@serviceName',
    partitionName: '@partitionName',
  }, {
    get: {
      method: 'GET',
      cache,
    },
    save: {
      url: '/dedicated/nasha/:serviceName/partition/:partitionName/options',
      method: 'POST',
      interceptor,
      params: {
        name: '@name',
        expiration: '@expiration',
      },
    },
  });

  resource.resetCache = function () {
    cache.removeAll();
  };

  return resource;
});
