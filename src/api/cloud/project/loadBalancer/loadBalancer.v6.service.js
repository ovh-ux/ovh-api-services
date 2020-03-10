angular.module('ovh-api-services').service('OvhApiCloudProjectLoadBalancerV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiCloudProjectLoadBalancerV6');
  const queryCache = $cacheFactory('OvhApiCloudProjectLoadBalancerV6Query');

  const lbResource = $resource('/cloud/project/:serviceName/loadbalancer/:loadBalancerId', {
    serviceName: '@serviceName',
    loadBalancerId: '@loadBalancerId',
  }, {
    query: { method: 'GET', isArray: true, cache: queryCache },
    get: { method: 'GET', cache },
    getStats: {
      url: '/cloud/project/:serviceName/loadbalancer/:loadBalancerId/stats',
      method: 'GET',
      cache,
    },
  });

  lbResource.resetCache = function () {
    cache.removeAll();
  };

  lbResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return lbResource;
});
