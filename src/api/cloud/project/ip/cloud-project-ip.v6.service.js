angular.module('ovh-api-services').service('OvhApiCloudProjectIpV6', ($resource, $cacheFactory) => {
  const queryCache = $cacheFactory('OvhApiCloudProjectIpV6Query');
  const cache = $cacheFactory('OvhApiCloudProjectIpV6');

  const ips = $resource('/cloud/project/:serviceName/ip', {
    serviceName: '@serviceName',
  }, {
    get: { method: 'GET', cache },
    query: {
      method: 'GET',
      cache: queryCache,
      isArray: true,
    },
  });

  ips.resetCache = function () {
    cache.removeAll();
  };

  ips.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return ips;
});
