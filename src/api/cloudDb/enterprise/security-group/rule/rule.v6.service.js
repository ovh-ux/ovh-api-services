angular.module('ovh-api-services').service('OvhApiCloudDBEnterpriseSecurityGroupRuleV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiCloudDBEnterpriseSecurityGroupRuleV6');
  const queryCache = $cacheFactory('OvhApiCloudDBEnterpriseSecurityGroupRuleV6Query');
  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response;
    },
  };

  const ruleResource = $resource('/cloudDB/enterprise/cluster/:clusterId/securityGroup/:securityGroupId/rule/:ruleId', {
    clusterId: '@clusterId',
    securityGroupId: '@securityGroupId',
    ruleId: '@ruleId',
  }, {
    query: { method: 'GET', isArray: true, cache: queryCache },
    get: { method: 'GET', cache },
    create: { method: 'POST', interceptor },
    delete: { method: 'DELETE', interceptor },
  });

  ruleResource.resetAllCache = function () {
    ruleResource.resetCache();
    ruleResource.resetQueryCache();
  };

  ruleResource.resetCache = function () {
    cache.removeAll();
  };

  ruleResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return ruleResource;
});
