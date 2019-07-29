angular.module('ovh-api-services').service('OvhApiDbaasLogsStreamAapi', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiDbaasLogsStreamAapi');

  const stream = $resource('/dbaas/logs/:serviceName/stream/:streamId', {
    serviceName: '@serviceName',
    streamId: '@streamId',
  }, {
    get: {
      method: 'GET',
      url: '/dbaas/logs/:serviceName/stream/:streamId',
      serviceType: 'aapi',
      cache,
      isArray: false,
    },
  });

  stream.resetAllCache = function () {
    stream.resetCache();
  };

  stream.resetCache = function () {
    cache.removeAll();
  };

  return stream;
});
