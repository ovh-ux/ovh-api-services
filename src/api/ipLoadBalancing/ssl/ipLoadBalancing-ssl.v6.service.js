angular.module('ovh-api-services').service('OvhApiIpLoadBalancingSslV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiIpLoadBalancingSslV6');
  const queryCache = $cacheFactory('OvhApiIpLoadBalancingSslV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.resource;
    },
  };

  const ipLoadBalancingSsl = $resource('/ipLoadbalancing/:serviceName/ssl/:sslId', {
    serviceName: '@serviceName',
    sslId: '@sslId',
  }, {
    query: { method: 'GET', isArray: true, cache: queryCache },
    get: { method: 'GET', cache },
    post: { method: 'POST', interceptor },
    put: { method: 'PUT', interceptor },
    delete: { method: 'DELETE', interceptor },
  });

  ipLoadBalancingSsl.resetCache = function () {
    cache.removeAll();
  };

  ipLoadBalancingSsl.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return ipLoadBalancingSsl;
});
