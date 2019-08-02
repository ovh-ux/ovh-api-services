angular.module('ovh-api-services').service('OvhApiIpLoadBalancingVrackV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiIpLoadBalancingVrackV6');
  const queryCache = $cacheFactory('OvhApiIpLoadBalancingVrackV6Query');

  const interceptor = {
    response(response) {
      cache.removeAll();
      queryCache.removeAll();
      return response.resource;
    },
  };

  const ipLoadBalancingVrack = $resource('/ipLoadbalancing/:serviceName/vrack/network/:vrackNetworkId', {
    serviceName: '@serviceName',
    vrackNetworkId: '@vrackNetworkId',
  }, {
    query: { method: 'GET', isArray: true, cache: queryCache },
    get: { method: 'GET', cache },
    post: { method: 'POST', interceptor },
    put: { method: 'PUT', interceptor },
    delete: { method: 'DELETE', interceptor },
    getCreationRules: {
      cache,
      method: 'GET',
      url: '/ipLoadbalancing/:serviceName/vrack/networkCreationRules',
    },
    getStatus: {
      cache,
      method: 'GET',
      url: '/ipLoadbalancing/:serviceName/vrack/status',
    },
    updateFarmId: {
      interceptor,
      method: 'POST',
      url: '/ipLoadbalancing/:serviceName/vrack/network/:vrackNetworkId/updateFarmId ',
    },
  });

  ipLoadBalancingVrack.resetCache = function () {
    cache.removeAll();
  };

  ipLoadBalancingVrack.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return ipLoadBalancingVrack;
});
