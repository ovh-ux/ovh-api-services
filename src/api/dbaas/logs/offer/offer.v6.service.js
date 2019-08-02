angular.module('ovh-api-services').service('OvhApiDbaasLogsOfferV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiDbaasLogsOfferV6');
  const queryCache = $cacheFactory('OvhApiDbaasLogsOfferV6Query');
  const offerResource = $resource('/dbaas/logs/:serviceName/offer', {
    serviceName: '@serviceName',
  }, {
    get: { method: 'GET', cache },
    offerDetail: {
      url: '/dbaas/logs/offer/:offerCode',
      method: 'GET',
      cache,
    },
  });

  offerResource.resetAllCache = function () {
    offerResource.resetCache();
    offerResource.resetQueryCache();
  };

  offerResource.resetCache = function () {
    cache.removeAll();
  };

  offerResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return offerResource;
});
