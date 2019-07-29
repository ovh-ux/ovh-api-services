angular.module('ovh-api-services').service('OvhApiDBaasTsRegionV6', ($resource, $cacheFactory) => {
  const queryCache = $cacheFactory('OvhApiDBaasTsRegionV6Query');

  const regionResource = $resource('/dbaas/timeseries/region', {
  }, {
    query: { method: 'GET', cache: queryCache, isArray: true },
  });

  regionResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return regionResource;
});
