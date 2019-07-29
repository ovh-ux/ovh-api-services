angular.module('ovh-api-services').service('OvhApiDedicatedNashaPartitionAccessV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiDedicatedNashaPartitionAccessV6');

  const interceptor = {
    response(response) {
      cache.removeAll();
      return response;
    },
  };

  const resource = $resource('/dedicated/nasha/:serviceName/partition/:partitionName/access/:ip', {
    serviceName: '@serviceName',
    partitionName: '@partitionName',
    ip: '@ip',
  }, {
    query: {
      method: 'GET',
      isArray: true,
      cache,
    },
    get: {
      method: 'GET',
      cache,
    },
    add: {
      method: 'POST',
      interceptor,
      url: '/dedicated/nasha/:serviceName/partition/:partitionName/access',
      params: {
        type: '@type',
      },
    },
    remove: {
      method: 'DELETE',
      interceptor,
    },
    getAuthorizableIps: {
      method: 'GET',
      isArray: true,
      url: '/dedicated/nasha/:serviceName/partition/:partitionName/authorizableIps',
    },
    getAuthorizableIpBlocks: {
      method: 'GET',
      isArray: true,
      url: '/dedicated/nasha/:serviceName/partition/:partitionName/authorizableBlocks',
    },
  });

  resource.resetCache = function () {
    cache.removeAll();
  };

  return resource;
});
