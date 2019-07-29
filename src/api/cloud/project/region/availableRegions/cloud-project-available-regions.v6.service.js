angular.module('ovh-api-services').service('OvhApiCloudProjectAvailableRegionsV6', ($resource, $cacheFactory) => {
  const queryCache = $cacheFactory('OvhApiCloudProjectAvailableRegionsV6Query');
  const cache = $cacheFactory('OvhApiCloudProjectAvailableRegionsV6');

  const regions = $resource('/cloud/project/:serviceName/regionAvailable', {
    serviceName: '@serviceName',
  }, {
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
  });

  regions.resetCache = function () {
    cache.removeAll();
  };

  regions.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return regions;
});
