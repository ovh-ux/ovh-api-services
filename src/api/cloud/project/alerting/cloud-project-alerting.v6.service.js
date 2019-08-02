angular.module('ovh-api-services').service('OvhApiCloudProjectAlertingV6', ($resource, $cacheFactory) => {
  const queryCache = $cacheFactory('OvhApiCloudProjectAlertingV6Query');
  const cache = $cacheFactory('OvhApiCloudProjectAlertingV6');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.data;
    },
  };

  const alertingResource = $resource('/cloud/project/:serviceName/alerting/:alertId', {
    serviceName: '@serviceName',
    alertId: '@alertId',
  }, {
    getIds: { method: 'GET', cache, isArray: true },
    get: { method: 'GET', cache },
    query: { method: 'GET', cache: queryCache, isArray: true },
    save: { method: 'POST', interceptor },
    put: { method: 'PUT', interceptor },
    alert: {
      url: '/cloud/project/:serviceName/alerting/:alertId/alert',
      method: 'GET',
      interceptor,
    },
  });

  alertingResource.resetCache = function () {
    cache.removeAll();
  };

  alertingResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return alertingResource;
});
