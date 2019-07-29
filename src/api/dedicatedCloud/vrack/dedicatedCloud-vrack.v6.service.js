angular.module('ovh-api-services').service('OvhApiDedicatedCloudVRackV6', ($resource, $cacheFactory) => {
  const queryCache = $cacheFactory('OvhApiDedicatedCloudVRackV6Query');
  const cache = $cacheFactory('OvhApiDedicatedCloudVRackV6');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.data;
    },
  };

  const vrackResource = $resource('/dedicatedCloud/:serviceName/vrack/:vrack', {
    serviceName: '@serviceName',
    vrack: '@vrack',
  }, {
    get: { method: 'GET', cache },
    query: { method: 'GET', cache: queryCache, isArray: true },
    delete: { method: 'DELETE', interceptor },
  });

  vrackResource.resetCache = function () {
    cache.removeAll();
  };

  vrackResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return vrackResource;
});
