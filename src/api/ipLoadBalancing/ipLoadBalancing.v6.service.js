angular.module('ovh-api-services').service('OvhApiIpLoadBalancingV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiIpLoadBalancingV6');
  const queryCache = $cacheFactory('OvhApiIpLoadBalancingV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.resource;
    },
  };

  const ipLoadBalancing = $resource('/ipLoadbalancing/:serviceName', {
    serviceName: '@serviceName',
  }, {
    schema: { method: 'GET', url: '/ipLoadbalancing.json' },
    query: { method: 'GET', isArray: true, cache: queryCache },
    get: { method: 'GET', cache },
    put: { method: 'PUT', interceptor },
    availableZones: {
      method: 'GET',
      isArray: true,
      url: '/ipLoadbalancing/:serviceName/availableZones',
      cache,
    },
    availableFarmProbes: {
      method: 'GET',
      isArray: true,
      url: '/ipLoadbalancing/:serviceName/availableFarmProbes',
      cache,
    },
    availableFarmTypes: {
      method: 'GET',
      isArray: true,
      url: '/ipLoadbalancing/:serviceName/availableFarmType',
      cache,
    },
    failoverIp: {
      method: 'GET',
      isArray: true,
      url: '/ipLoadbalancing/:serviceName/failover ',
      cache,
    },
    natIp: {
      method: 'GET',
      isArray: true,
      url: '/ipLoadbalancing/:serviceName/natIp  ',
      cache,
    },
    pendingChanges: {
      method: 'GET',
      isArray: true,
      url: '/ipLoadbalancing/:serviceName/pendingChanges',
    },
    refresh: {
      method: 'POST',
      url: '/ipLoadbalancing/:serviceName/refresh',
    },
    serviceInfos: {
      method: 'GET',
      url: '/ipLoadbalancing/:serviceName/serviceInfos',
      cache,
    },
    freeCertificate: {
      method: 'POST',
      url: '/ipLoadbalancing/:serviceName/freeCertificate',
    },
    status: {
      method: 'GET',
      url: '/ipLoadbalancing/:serviceName/status',
    },
  });

  ipLoadBalancing.resetCache = function () {
    cache.removeAll();
  };

  ipLoadBalancing.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return ipLoadBalancing;
});
