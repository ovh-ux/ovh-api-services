angular.module('ovh-api-services').service('OvhApiCloudProjectUsageHistoryV6', ($resource, $cacheFactory) => {
  const queryCache = $cacheFactory('OvhApiCloudProjectUsageHistoryV6Query');
  const cache = $cacheFactory('OvhApiCloudProjectUsageHistoryV6');

  const usages = $resource('/cloud/project/:serviceName/usage/history/:usageId', {
    serviceName: '@serviceName',
    usageId: '@usageId',
  }, {
    get: { method: 'GET', cache },
    query: { method: 'GET', cache: queryCache, isArray: true },
  });

  usages.resetCache = function () {
    cache.removeAll();
  };

  usages.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return usages;
});
