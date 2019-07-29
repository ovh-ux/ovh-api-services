angular.module('ovh-api-services').service('OvhApiDbaasQueueRegionV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiDbaasQueueRegionV6');
  const queryCache = $cacheFactory('OvhApiDbaasQueueRegionV6Query');

  const regionResource = $resource('/dbaas/queue/region', {
    regionId: '@regionId',
  }, {
    get: { method: 'GET', cache, url: '/dbaas/queue/region/:regionId' },
    query: { method: 'GET', cache: queryCache, isArray: true },
  });

  regionResource.resetAllCache = function () {
    regionResource.resetCache();
    regionResource.resetQueryCache();
  };

  regionResource.resetCache = function () {
    cache.removeAll();
  };

  regionResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return regionResource;
});
