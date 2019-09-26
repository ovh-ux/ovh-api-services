angular.module('ovh-api-services').service('OvhApiCloudDBEnterpriseServiceInfosV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiCloudDBEnterpriseServiceInfosV6');
  const queryCache = $cacheFactory('OvhApiCloudDBEnterpriseServiceInfosV6Query');
  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response;
    },
  };

  const serviceInfoResource = $resource('/cloudDB/enterprise/cluster/:clusterId/serviceInfos', {
    clusterId: '@clusterId',
  }, {
    query: { method: 'GET', isArray: true, cache: queryCache },
    get: { method: 'GET', cache },
    update: { method: 'PUT', interceptor },
  });

  serviceInfoResource.resetAllCache = function () {
    serviceInfoResource.resetCache();
    serviceInfoResource.resetQueryCache();
  };

  serviceInfoResource.resetCache = function () {
    cache.removeAll();
  };

  serviceInfoResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return serviceInfoResource;
});
