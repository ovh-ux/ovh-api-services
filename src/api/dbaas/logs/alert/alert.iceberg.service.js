angular.module('ovh-api-services').service('OvhApiDbaasLogsAlertIceberg', (iceberg) => {
  const alertResource = iceberg('/dbaas/logs/:serviceName/output/graylog/stream/:streamId/alert/:alertId', {
    serviceName: '@serviceName',
    streamId: '@streamId',
    alertId: '@alertId',
  }, {
    post: { method: 'POST' },
    put: { method: 'PUT' },
  });

  return alertResource;
});
