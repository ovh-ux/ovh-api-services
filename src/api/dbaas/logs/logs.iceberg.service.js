angular.module('ovh-api-services').service('OvhApiDbaasLogsIceberg', (iceberg) => {
  const logsResource = iceberg('/dbaas/logs/:serviceName', {
    serviceName: '@serviceName',
  });

  return logsResource;
});
