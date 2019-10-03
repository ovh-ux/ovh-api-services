angular.module('ovh-api-services').service('OvhApiCloudDBEnterpriseClusterV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiCloudDBEnterpriseClusterV6');
  const queryCache = $cacheFactory('OvhApiCloudDBEnterpriseClusterV6Query');
  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response;
    },
  };

  const enterpriseCloudResource = $resource('/cloudDB/enterprise/cluster/:clusterId', {
    clusterId: '@clusterId',
  }, {
    query: { method: 'GET', isArray: true, cache: queryCache },
    get: { method: 'GET', cache },
    update: { method: 'PUT', interceptor },
    scale: {
      url: '/cloudDB/enterprise/cluster/:clusterId/scale',
      method: 'POST',
      interceptor,
    },
    terminate: {
      url: '/cloudDB/enterprise/cluster/:clusterId/terminate',
      method: 'POST',
      interceptor,
    },
  });

  enterpriseCloudResource.resetAllCache = function () {
    enterpriseCloudResource.resetCache();
    enterpriseCloudResource.resetQueryCache();
  };

  enterpriseCloudResource.resetCache = function () {
    cache.removeAll();
  };

  enterpriseCloudResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return enterpriseCloudResource;
});
