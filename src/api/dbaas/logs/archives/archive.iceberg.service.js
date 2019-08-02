angular.module('ovh-api-services').service('OvhApiDbaasLogsArchiveIceberg', (iceberg) => {
  const archiveResource = iceberg('/dbaas/logs/:serviceName/output/graylog/stream/:streamId/archive/:archiveId', {
    serviceName: '@serviceName',
    streamId: '@streamId',
    archiveId: '@archiveId',
    expirationInSeconds: '@expirationInSeconds',
  }, {
    url: { method: 'POST', url: '/dbaas/logs/:serviceName/output/graylog/stream/:streamId/archive/:archiveId/url' },
  });

  return archiveResource;
});
