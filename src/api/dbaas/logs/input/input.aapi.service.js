angular.module('ovh-api-services').service('OvhApiDbaasLogsInputAapi', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiDbaasLogsInputAapi');

  const input = $resource('/dbaas/logs/:serviceName/input/:inputId', {
    serviceName: '@serviceName',
    inputId: '@inputId',
  }, {
    get: {
      method: 'GET',
      serviceType: 'aapi',
      cache,
      isArray: false,
    },
  });

  input.resetAllCache = function () {
    input.resetCache();
  };

  input.resetCache = function () {
    cache.removeAll();
  };

  return input;
});
