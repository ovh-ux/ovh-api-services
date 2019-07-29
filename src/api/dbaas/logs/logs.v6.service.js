angular.module('ovh-api-services').service('OvhApiDbaasLogsV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiDbaasLogsV6');
  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      return response;
    },
  };

  const logsResource = $resource('/dbaas/logs/:serviceName', {
    serviceName: '@serviceName',
  }, {
    streams: {
      method: 'GET',
      isArray: true,
      url: '/dbaas/logs/:serviceName/output/graylog/stream',
      cache,
    },
    logDetail: { method: 'GET', cache },
    update: { method: 'PUT', interceptor },
    serviceInfos: {
      method: 'GET',
      url: '/dbaas/logs/:serviceName/serviceInfos',
      cache,
    },
  });

  logsResource.resetAllCache = function () {
    logsResource.resetCache();
  };

  logsResource.resetCache = function () {
    cache.removeAll();
  };

  return logsResource;
});
