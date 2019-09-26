angular.module('ovh-api-services').service('OvhApiCloudDBEnterpriseSecurityGroupV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiCloudDBEnterpriseSecurityGroupV6');
  const queryCache = $cacheFactory('OvhApiCloudDBEnterpriseSecurityGroupV6Query');
  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response;
    },
  };

  const securityGroupResource = $resource('/cloudDB/enterprise/cluster/:clusterId/securityGroup/:securityGroupId', {
    clusterId: '@clusterId',
    securityGroupId: '@securityGroupId',
  }, {
    query: { method: 'GET', isArray: true, cache: queryCache },
    create: { method: 'POST', interceptor },
    get: { method: 'GET', cache },
    update: { method: 'PUT', interceptor },
    delete: { method: 'DELETE', interceptor },
  });

  securityGroupResource.resetAllCache = function () {
    securityGroupResource.resetCache();
    securityGroupResource.resetQueryCache();
  };

  securityGroupResource.resetCache = function () {
    cache.removeAll();
  };

  securityGroupResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return securityGroupResource;
});
