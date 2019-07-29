angular.module('ovh-api-services').service('OvhApiCloudProjectRegionV6', ($resource, $cacheFactory) => {
  const queryCache = $cacheFactory('OvhApiCloudProjectRegionV6Query');
  const cache = $cacheFactory('OvhApiCloudProjectRegionV6');
  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.data;
    },
  };

  const regions = $resource('/cloud/project/:serviceName/region/:id', {
    serviceName: '@serviceName',
    id: '@id',
  }, {
    get: { method: 'GET', cache },
    query: {
      method: 'GET',
      cache: queryCache,
      isArray: true,
      transformResponse(regionsResp, headers, status) {
        let regionsRsp = regionsResp;

        if (status === 200) {
          regionsRsp = angular.fromJson(regionsRsp); // IE11
          return regionsRsp.sort();
        }
        return regionsRsp;
      },
    },
    addRegion: { method: 'POST', interceptor },
  });

  regions.resetCache = function () {
    cache.removeAll();
  };

  regions.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return regions;
});
