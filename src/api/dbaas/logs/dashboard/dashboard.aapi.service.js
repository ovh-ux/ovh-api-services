angular.module('ovh-api-services').service('OvhApiDbaasLogsDashboardAapi', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiDbaasLogsDashboardAapi');

  const dashboard = $resource('/dbaas/logs/:serviceName/dashboard/:dashboardId', {
    serviceName: '@serviceName',
    dashboardId: '@dashboardId',
  }, {
    get: {
      method: 'GET',
      serviceType: 'aapi',
      cache,
      isArray: false,
    },
  });

  dashboard.resetAllCache = function () {
    dashboard.resetCache();
  };

  dashboard.resetCache = function () {
    cache.removeAll();
  };

  return dashboard;
});
