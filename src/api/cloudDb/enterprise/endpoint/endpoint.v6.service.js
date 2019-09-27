angular.module('ovh-api-services').service('OvhApiCloudDBEnterpriseEndpointV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiCloudDBEnterpriseEndpointV6');
  const queryCache = $cacheFactory('OvhApiCloudDBEnterpriseEndpointV6Query');

  const endpointResource = $resource('/cloudDB/enterprise/cluster/:clusterId/endpoint/:endpointId', {
    clusterId: '@clusterId',
    endpointId: '@endpointId',
  }, {
    query: { method: 'GET', isArray: true, cache: queryCache },
    get: { method: 'GET', cache },
  });

  endpointResource.resetAllCache = function () {
    endpointResource.resetCache();
    endpointResource.resetQueryCache();
  };

  endpointResource.resetCache = function () {
    cache.removeAll();
  };

  endpointResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return endpointResource;
});
