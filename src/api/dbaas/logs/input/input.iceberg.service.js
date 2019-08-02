angular.module('ovh-api-services').service('OvhApiDbaasLogsInputIceberg', (iceberg) => {
  const inputResource = iceberg('/dbaas/logs/:serviceName/input/:inputId', {
    serviceName: '@serviceName',
    inputId: '@inputId',
    allowedNetworkId: '@allowedNetworkId',
  }, {
    create: { method: 'POST' },
    update: { method: 'PUT' },
    start: { method: 'POST', url: '/dbaas/logs/:serviceName/input/:inputId/start' },
    restart: { method: 'POST', url: '/dbaas/logs/:serviceName/input/:inputId/restart' },
    end: { method: 'POST', url: '/dbaas/logs/:serviceName/input/:inputId/end' },
    logurl: { method: 'POST', url: '/dbaas/logs/:serviceName/input/:inputId/logs/url' },
    test: { method: 'POST', url: '/dbaas/logs/:serviceName/input/:inputId/configtest' },
    testResult: { method: 'GET', url: '/dbaas/logs/:serviceName/input/:inputId/configtest/result' },
    updateLogstash: { method: 'PUT', url: '/dbaas/logs/:serviceName/input/:inputId/configuration/logstash' },
    updateFlowgger: { method: 'PUT', url: '/dbaas/logs/:serviceName/input/:inputId/configuration/flowgger' },
    trustNetwork: { method: 'POST', url: '/dbaas/logs/:serviceName/input/:inputId/allowedNetwork' },
    rejectNetwork: { method: 'DELETE', url: '/dbaas/logs/:serviceName/input/:inputId/allowedNetwork/:allowedNetworkId' },
  });

  return inputResource;
});
