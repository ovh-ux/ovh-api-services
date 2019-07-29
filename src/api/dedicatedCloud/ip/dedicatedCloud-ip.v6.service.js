angular.module('ovh-api-services').service('OvhApiDedicatedCloudIpV6', ($resource, $cacheFactory) => {
  const queryCache = $cacheFactory('OvhApiDedicatedCloudIpV6Query');
  const cache = $cacheFactory('OvhApiDedicatedCloudIpV6');

  const ipResource = $resource('/dedicatedCloud/:serviceName/ip/:network', {
    serviceName: '@serviceName',
    network: '@network',
  }, {
    query: { method: 'GET', cache: queryCache, isArray: true },
    get: { method: 'GET', cache },
  });

  ipResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  ipResource.resetCache = function () {
    cache.removeAll();
  };

  return ipResource;
});
