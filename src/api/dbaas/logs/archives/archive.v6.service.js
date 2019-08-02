angular.module('ovh-api-services').service('OvhApiDbaasLogsArchiveV6', ($resource, $cacheFactory) => {
  const queryCache = $cacheFactory('OvhApiDbaasLogsArchiveV6Query');
  const interceptor = {
    response(response) {
      queryCache.removeAll();
      return response;
    },
  };

  const archiveResource = $resource('/dbaas/logs/:serviceName/output/graylog/stream/:streamId/archive/:archiveId', {
    serviceName: '@serviceName',
    streamId: '@streamId',
    archiveId: '@archiveId',
    expirationInSeconds: '@expirationInSeconds',
  }, {
    query: { method: 'GET', isArray: true, cache: queryCache },
    get: { method: 'GET' },
    url: { method: 'POST', interceptor, url: '/dbaas/logs/:serviceName/output/graylog/stream/:streamId/archive/:archiveId/url' },
  });

  archiveResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return archiveResource;
});
