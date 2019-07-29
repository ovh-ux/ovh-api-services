angular.module('ovh-api-services').service('OvhApiDbaasLogsOperationV6', ($resource) => {
  const operationResource = $resource('/dbaas/logs/:serviceName/operation/:operationId', {
    serviceName: '@serviceName',
    operationId: '@operationId',
  }, {
    get: { method: 'GET', url: '/dbaas/logs/:serviceName/operation/:operationId' },
  });
  return operationResource;
});
