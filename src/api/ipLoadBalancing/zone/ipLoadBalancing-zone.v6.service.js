angular.module('ovh-api-services').service('OvhApiIpLoadBalancingZoneV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiIpLoadBalancingZoneV6');
  const queryCache = $cacheFactory('OvhApiIpLoadBalancingZoneV6Query');

  const interceptor = {
    response(response) {
      cache.removeAll();
      queryCache.removeAll();
      return response.resource;
    },
  };

  const ipLoadBalancingZone = $resource('/ipLoadbalancing/:serviceName/zone/:name', {
    serviceName: '@serviceName',
    name: '@name',
  }, {
    query: { method: 'GET', isArray: true, cache: queryCache },
    get: { method: 'GET', cache },
    cancelDelete: {
      method: 'POST',
      url: '/ipLoadbalancing/:serviceName/zone/:name/cancelTermination',
      interceptor,
    },
    delete: {
      method: 'POST',
      url: '/ipLoadbalancing/:serviceName/zone/:name/terminate',
      interceptor,
    },
  });

  ipLoadBalancingZone.resetCache = function () {
    cache.removeAll();
  };

  ipLoadBalancingZone.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return ipLoadBalancingZone;
});
