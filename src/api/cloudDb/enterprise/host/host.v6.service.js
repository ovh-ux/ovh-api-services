angular.module('ovh-api-services').service('OvhApiCloudDBEnterpriseHostV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiCloudDBEnterpriseHostV6');
  const queryCache = $cacheFactory('OvhApiCloudDBEnterpriseHostV6Query');

  const hostResource = $resource('/cloudDB/enterprise/cluster/:clusterId/host/:hostId', {
    clusterId: '@clusterId',
    hostId: '@hostId',
  }, {
    query: { method: 'GET', isArray: true, cache: queryCache },
    get: { method: 'GET', cache },
  });

  hostResource.resetAllCache = function () {
    hostResource.resetCache();
    hostResource.resetQueryCache();
  };

  hostResource.resetCache = function () {
    cache.removeAll();
  };

  hostResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return hostResource;
});
