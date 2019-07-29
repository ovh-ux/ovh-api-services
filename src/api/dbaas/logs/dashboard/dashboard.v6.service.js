angular.module('ovh-api-services').service('OvhApiDbaasLogsDashboardV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiDbaasLogsDashboardV6');
  const queryCache = $cacheFactory('OvhApiDbaasLogsDashboardV6Query');
  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response;
    },
  };

  const dashboardResource = $resource('/dbaas/logs/:serviceName/output/graylog/dashboard/:dashboardId', {
    serviceName: '@serviceName',
    dashboardId: '@dashboardId',
  }, {
    query: { method: 'GET', isArray: true, cache: queryCache },
    create: { method: 'POST', interceptor },
    update: { method: 'PUT', interceptor },
    remove: { method: 'DELETE', interceptor },
    duplicate: { method: 'POST', url: '/dbaas/logs/:serviceName/output/graylog/dashboard/:dashboardId/duplicate', interceptor },
  });

  dashboardResource.resetAllCache = function () {
    dashboardResource.resetCache();
    dashboardResource.resetQueryCache();
  };

  dashboardResource.resetCache = function () {
    cache.removeAll();
  };

  dashboardResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return dashboardResource;
});
