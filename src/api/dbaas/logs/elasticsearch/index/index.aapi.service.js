angular.module('ovh-api-services').service('OvhApiDbaasLogsIndexAapi', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiDbaasLogsIndexAapi');
  const queryCache = $cacheFactory('OvhApiDbaasLogsIndexAapiQuery');

  const index = $resource('/dbaas/logs/:serviceName/index/:indexId', {
    serviceName: '@serviceName',
    indexId: '@indexId',
  }, {
    get: {
      method: 'GET',
      serviceType: 'aapi',
      cache,
      isArray: false,
    },
  });

  index.resetAllCache = function () {
    index.resetCache();
    index.resetQueryCache();
  };

  index.resetCache = function () {
    cache.removeAll();
  };

  index.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return index;
});
