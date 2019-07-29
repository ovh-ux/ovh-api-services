angular.module('ovh-api-services').service('OvhApiAnalyticsCapabilitiesV6', ($resource, $cacheFactory) => {
  const queryCache = $cacheFactory('OvhApiAnalyticsCapabilitiesV6Query');

  const adpResource = $resource('/analytics/capabilities/platforms', {
    serviceName: '@serviceName',
  }, {
    query: { method: 'GET', isArray: true, cache: queryCache },
  });

  adpResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return adpResource;
});
