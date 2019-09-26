angular.module('ovh-api-services').service('OvhApiCloudDBEnterpriseOffersV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiCloudDBEnterpriseOffersV6');
  const queryCache = $cacheFactory('OvhApiCloudDBEnterpriseOffersV6Query');

  const offersResource = $resource('/cloudDB/enterprise/offer/:name', {
    name: '@name',
  }, {
    query: { method: 'GET', isArray: true, cache: queryCache },
    get: { method: 'GET', cache },
    getRegions: {
      method: 'GET',
      isArray: true,
      cache,
      url: '/cloudDB/enterprise/offer/:name/region',
    },
    getAvailableHostCount: {
      method: 'GET',
      url: '/cloudDB/enterprise/offer/:name/region/:regionName',
      params: {
        regionName: '@regionName',
      },
    },
  });

  offersResource.resetAllCache = function () {
    offersResource.resetCache();
    offersResource.resetQueryCache();
  };

  offersResource.resetCache = function () {
    cache.removeAll();
  };

  offersResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return offersResource;
});
