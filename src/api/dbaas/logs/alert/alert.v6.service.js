angular.module('ovh-api-services').service('OvhApiDbaasLogsAlertV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiDbaasLogsAlertV6');
  const queryCache = $cacheFactory('OvhApiDbaasLogsAlertV6Query');
  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response;
    },
  };

  const alertResource = $resource('/dbaas/logs/:serviceName/output/graylog/stream/:streamId/alert/:alertId', {
    serviceName: '@serviceName',
    streamId: '@streamId',
    alertId: '@alertId',
  }, {
    query: { method: 'GET', isArray: true, cache: queryCache },
    get: { method: 'GET', cache },
    post: { method: 'POST', interceptor },
    put: { method: 'PUT', interceptor },
    delete: { method: 'DELETE', interceptor },
  });

  alertResource.resetAllCache = function () {
    alertResource.resetCache();
    alertResource.resetQueryCache();
  };

  alertResource.resetCache = function () {
    cache.removeAll();
  };

  alertResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return alertResource;
});
