angular.module('ovh-api-services').service('OvhApiDedicatedCloudLocationStockV6', ($resource, $cacheFactory) => {
  const queryCache = $cacheFactory('OvhApiDedicatedCloudLocationStockV6Query');
  const baseUrl = '/dedicatedCloud/location/:pccZone/stock';

  const stockResource = $resource(baseUrl, {
    pccZone: '@pccZone',
  }, {
    queryPcc: {
      url: `${baseUrl}/pcc`,
      method: 'GET',
      cache: queryCache,
      isArray: true,
    },
    queryHost: {
      url: `${baseUrl}/host`,
      method: 'GET',
      cache: queryCache,
      isArray: true,
      params: {
        minYear: '@minYear',
      },
    },
    queryZpool: {
      url: `${baseUrl}/zpool`,
      method: 'GET',
      cache: queryCache,
      isArray: true,
      params: {
        profileFilter: '@profileFilter',
      },
    },
  });

  stockResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return stockResource;
});
