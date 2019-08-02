angular.module('ovh-api-services').service('OvhApiIpLoadBalancingQuotaV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiIpLoadBalancingQuotaV6');
  const queryCache = $cacheFactory('OvhApiIpLoadBalancingQuotaV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.resource;
    },
  };

  const ipLoadBalancingQuota = $resource('/ipLoadbalancing/:serviceName/quota/:zoneName', {
    serviceName: '@serviceName',
    zoneName: '@zoneName',
  }, {
    query: { method: 'GET', isArray: true, cache: queryCache },
    get: { method: 'GET', cache },
    put: { method: 'PUT', interceptor },
  });

  ipLoadBalancingQuota.resetCache = function () {
    cache.removeAll();
  };

  ipLoadBalancingQuota.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return ipLoadBalancingQuota;
});
