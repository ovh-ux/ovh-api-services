angular.module('ovh-api-services').service('OvhApiDedicatedCloudLocationV6', ($resource, $cacheFactory) => {
  const queryCache = $cacheFactory('OvhApiDedicatedCloudLocationV6Query');
  const cache = $cacheFactory('OvhApiDedicatedCloudLocationV6');

  const locationResource = $resource('/dedicatedCloud/location/:pccZone', {
    pccZone: '@pccZone',
  }, {
    get: { method: 'GET', cache },
    query: { method: 'GET', cache: queryCache, isArray: true },
  });

  locationResource.resetCache = function () {
    cache.removeAll();
  };

  locationResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return locationResource;
});
