angular.module('ovh-api-services').service('OvhApiDbaasLogsClusterV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiDbaasLogsClusterV6');
  const queryCache = $cacheFactory('OvhApiDbaasLogsClusterV6Query');

  const clusterResource = $resource('/dbaas/logs/:serviceName/cluster/:clusterId', {
    serviceName: '@serviceName',
    clusterId: '@clusterId',
  }, {
    query: { method: 'GET', isArray: true, cache: queryCache },
    get: { method: 'GET', cache },
  });

  clusterResource.resetAllCache = function () {
    clusterResource.resetCache();
    clusterResource.resetQueryCache();
  };

  clusterResource.resetCache = function () {
    cache.removeAll();
  };

  clusterResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return clusterResource;
});
