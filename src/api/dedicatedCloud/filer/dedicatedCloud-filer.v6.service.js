angular.module('ovh-api-services').service('OvhApiDedicatedCloudFilerV6', ($resource, $cacheFactory) => {
  const queryCache = $cacheFactory('OvhApiDedicatedCloudFilerV6Query');
  const cache = $cacheFactory('OvhApiDedicatedCloudFilerV6');

  const filerResource = $resource('/dedicatedCloud/:serviceName/filer/:filerId', {
    serviceName: '@serviceName',
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
