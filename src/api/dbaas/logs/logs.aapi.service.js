angular.module('ovh-api-services').service('OvhApiDbaasLogsAapi', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiDbaasLogsAapi');

  const home = $resource('/dbaas/logs/:serviceName/home', {}, {
    home: {
      method: 'GET',
      url: '/dbaas/logs/:serviceName/home',
      serviceType: 'aapi',
      cache,
      isArray: false,
    },
  });

  home.resetCache = function () {
    cache.removeAll();
  };

  return home;
});
