angular.module('ovh-api-services').service('OvhApiCloudDBEnterpriseRegionV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiCloudDBEnterpriseRegionV6');
  const queryCache = $cacheFactory('OvhApiCloudDBEnterpriseRegionV6Query');

  const regionResource = $resource('/cloudDB/enterprise/region/:name', {
    name: '@name',
  }, {
    query: { method: 'GET', isArray: true, cache: queryCache },
    get: { method: 'GET', cache },
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
