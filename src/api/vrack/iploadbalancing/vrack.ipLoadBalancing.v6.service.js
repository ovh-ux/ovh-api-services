angular.module('ovh-api-services').service('OvhApiVrackIpLoadBalancingV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiVrackIpLoadBalancingV6');
  const queryCache = $cacheFactory('OvhApiVrackIpLoadBalancingV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response;
    },
  };

  const vrackIpLoadBalancing = $resource('/vrack/:serviceName/ipLoadbalancing/:ipLoadbalancing', {
    serviceName: '@serviceName',
    ipLoadbalancing: '@ipLoadbalancing',
  }, {
    query: { method: 'GET', isArray: true, cache: queryCache },
    get: { method: 'GET', cache },
    edit: { method: 'PUT', interceptor },
    delete: { method: 'DELETE', interceptor },
    create: {
      method: 'POST',
      url: '/vrack/:serviceName/ipLoadbalancing',
      interceptor,
    },
  });

  vrackIpLoadBalancing.resetCache = function () {
    cache.removeAll();
  };

  vrackIpLoadBalancing.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return vrackIpLoadBalancing;
});
