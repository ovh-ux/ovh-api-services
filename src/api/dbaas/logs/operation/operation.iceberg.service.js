angular.module('ovh-api-services').service('OvhApiDbaasLogsOperationIceberg', (iceberg) => {
  const operationResource = iceberg('/dbaas/logs/:serviceName/operation/:operationId', {
    serviceName: '@serviceName',
    operationId: '@operationId',
  });
  return operationResource;
});
