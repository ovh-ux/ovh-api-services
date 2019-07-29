angular.module('ovh-api-services').service('OvhApiCloudProjectIpFailoverV6', ($resource, $cacheFactory) => {
  const queryCache = $cacheFactory('OvhApiCloudProjectIpFailoverV6Query');
  const cache = $cacheFactory('OvhApiCloudProjectIpFailoverV6');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.data;
    },
  };

  const ips = $resource('/cloud/project/:serviceName/ip/failover/:id', {
    serviceName: '@serviceName',
    id: '@id',
  }, {
    get: { method: 'GET', cache },
    query: {
      method: 'GET',
      cache: queryCache,
      isArray: true,
    },
    attach: {
      method: 'POST',
      url: '/cloud/project/:serviceName/ip/failover/:id/attach',
      interceptor,
    },
    detach: {
      method: 'POST',
      url: '/cloud/project/:serviceName/ip/failover/:id/detach',
      interceptor,
    },
  });

  ips.resetAllCache = function () {
    ips.resetCache();
    ips.resetQueryCache();
  };

  ips.resetCache = function () {
    cache.removeAll();
  };

  ips.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return ips;
});
