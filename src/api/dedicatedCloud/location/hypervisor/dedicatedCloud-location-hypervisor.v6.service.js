angular.module('ovh-api-services').service('OvhApiDedicatedCloudLocationHypervisorV6', ($resource, $cacheFactory) => {
  const queryCache = $cacheFactory('OvhApiDedicatedCloudLocationHypervisorV6Query');
  const cache = $cacheFactory('OvhApiDedicatedCloudLocationHypervisorV6');


  const locationResource = $resource('/dedicatedCloud/location/:pccZone/hypervisor/:id', {
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
