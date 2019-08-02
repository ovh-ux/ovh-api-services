angular.module('ovh-api-services').service('OvhApiDbaasLogsAccountingAapi', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiDbaasLogsAccountingAapi');

  const accounting = $resource('/dbaas/logs/:serviceName/accounting', {
    serviceName: '@serviceName',
  }, {
    me: {
      method: 'GET',
      url: '/dbaas/logs/:serviceName/accounting',
      serviceType: 'aapi',
      cache,
      isArray: false,
    },
  });

  accounting.resetAllCache = function () {
    accounting.resetCache();
  };

  accounting.resetCache = function () {
    cache.removeAll();
  };

  return accounting;
});
