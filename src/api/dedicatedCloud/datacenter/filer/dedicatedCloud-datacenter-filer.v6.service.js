angular.module('ovh-api-services').service('OvhApiDedicatedCloudDatacenterFilerV6', ($resource, $cacheFactory) => {
  const queryCache = $cacheFactory('OvhApiDedicatedCloudDatacenterFilerV6Query');
  const cache = $cacheFactory('OvhApiDedicatedCloudDatacenterFilerV6');

  const filerResource = $resource('/dedicatedCloud/:serviceName/datacenter/:datacenterId/filer/:filerId', {
    serviceName: '@serviceName',
    datacenterId: '@datacenterId',
    filerId: '@filerId',
  }, {
    get: { method: 'GET', cache },
    query: { method: 'GET', cache: queryCache, isArray: true },
  });

  filerResource.resetCache = function () {
    cache.removeAll();
  };

  filerResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return filerResource;
});
