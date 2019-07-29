angular.module('ovh-api-services').service('OvhApiDedicatedCloudAllowedNetworkV6', ($resource, $cacheFactory) => {
  const queryCache = $cacheFactory('OvhApiDedicatedCloudAllowedNetworkV6Query');
  const cache = $cacheFactory('OvhApiDedicatedCloudAllowedNetworkV6');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.data;
    },
  };

  const networkAllowedResource = $resource('/dedicatedCloud/:serviceName/allowedNetwork/:networkAccessId', {
    serviceName: '@serviceName',
    networkAccessId: '@networkAccessId',
  }, {
    get: { method: 'GET', cache },
    query: { method: 'GET', cache: queryCache, isArray: true },
    put: { method: 'PUT', interceptor },
    save: { method: 'POST', interceptor },
    delete: { method: 'DELETE', interceptor },
  });

  networkAllowedResource.resetCache = function () {
    cache.removeAll();
  };

  networkAllowedResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return networkAllowedResource;
});
