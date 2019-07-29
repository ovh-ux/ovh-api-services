angular.module('ovh-api-services').service('OvhApiAnalyticsPlatformsNodeV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiAnalyticsPlatformsNodeV6');
  const queryCache = $cacheFactory('OvhApiAnalyticsPlatformsNodeV6Query');

  const adpResource = $resource('/analytics/platforms/:serviceName/nodes/:nodeId', {
    serviceName: '@serviceName',
    nodeId: '@nodeId',
  }, {
    query: {
      method: 'GET',
      isArray: true,
      cache: queryCache,
    },
    get: { method: 'GET', cache },
  });

  adpResource.resetCache = function () {
    cache.removeAll();
  };

  adpResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return adpResource;
});
