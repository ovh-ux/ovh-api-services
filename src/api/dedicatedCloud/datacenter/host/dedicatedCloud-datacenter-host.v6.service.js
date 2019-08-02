angular.module('ovh-api-services').service('OvhApiDedicatedCloudDatacenterHostV6', ($resource, $cacheFactory) => {
  const queryCache = $cacheFactory('OvhApiDedicatedCloudDatacenterHostV6Query');
  const cache = $cacheFactory('OvhApiDedicatedCloudDatacenterHostV6');

  const hostResource = $resource('/dedicatedCloud/:serviceName/datacenter/:datacenterId/host/:hostId', {
    serviceName: '@serviceName',
    datacenterId: '@datacenterId',
    hostId: '@hostId',
  }, {
    get: { method: 'GET', cache },
    query: { method: 'GET', cache: queryCache, isArray: true },
  });

  hostResource.resetCache = function () {
    cache.removeAll();
  };

  hostResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return hostResource;
});
