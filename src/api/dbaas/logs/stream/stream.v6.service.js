angular.module('ovh-api-services').service('OvhApiDbaasLogsStreamV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiDbaasLogsStreamV6');
  const queryCache = $cacheFactory('OvhApiDbaasLogsStreamV6Query');
  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response;
    },
  };

  const streamResource = $resource('/dbaas/logs/:serviceName/output/graylog/stream/:streamId', {
    serviceName: '@serviceName',
    streamId: '@streamId',
  }, {
    get: { method: 'GET', cache },
    create: { method: 'POST', interceptor },
    update: { method: 'PUT', interceptor, url: '/dbaas/logs/:serviceName/output/graylog/stream/:streamId' },
    delete: { method: 'DELETE', interceptor, url: '/dbaas/logs/:serviceName/output/graylog/stream/:streamId' },
    notifications: {
      method: 'GET',
      url: '/dbaas/logs/:serviceName/output/graylog/stream/:streamId/alert',
      cache,
      isArray: true,
    },
  });

  streamResource.resetAllCache = function () {
    streamResource.resetCache();
    streamResource.resetQueryCache();
  };

  streamResource.resetCache = function () {
    cache.removeAll();
  };

  streamResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return streamResource;
});
