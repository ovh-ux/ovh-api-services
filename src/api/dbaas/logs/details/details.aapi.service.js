angular.module('ovh-api-services').service('OvhApiDbaasLogsDetailsAapi', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiDbaasLogsDetailsAapi');

  const home = $resource('/dbaas/logs/:serviceName/home', {
    serviceName: '@serviceName',
  }, {
    me: {
      method: 'GET',
      serviceType: 'aapi',
      cache,
      isArray: false,
    },
  });

  home.resetAllCache = function () {
    home.resetCache();
  };

  home.resetCache = function () {
    cache.removeAll();
  };

  return home;
});
