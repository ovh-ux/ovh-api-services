angular.module('ovh-api-services').service('OvhApiDbaasLogsIndexIceberg', (iceberg) => {
  const index = iceberg('/dbaas/logs/:serviceName/output/elasticsearch/index/:indexId', {
    serviceName: '@serviceName',
    indexId: '@indexId',
  }, {
    post: { method: 'POST' },
    put: { method: 'PUT' },
  });

  return index;
});
