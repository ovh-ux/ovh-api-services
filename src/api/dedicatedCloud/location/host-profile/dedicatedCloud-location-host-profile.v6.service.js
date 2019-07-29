angular.module('ovh-api-services').service('OvhApiDedicatedCloudLocationHostProfileV6', ($resource, $cacheFactory) => {
  const queryCache = $cacheFactory('OvhApiDedicatedCloudLocationHostProfileV6Query');
  const cache = $cacheFactory('OvhApiDedicatedCloudLocationHostProfileV6');


  const locationResource = $resource('/dedicatedCloud/location/:pccZone/hostProfile/:id', {
    pccZone: '@pccZone',
    id: '@id',
  }, {
    query: { method: 'GET', cache: queryCache, isArray: true },
    get: { method: 'GET', cache },
  });

  locationResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return locationResource;
});
