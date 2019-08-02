angular.module('ovh-api-services').service('OvhApiDbaasLogsOptionIceberg', (iceberg) => {
  const optionResource = iceberg('/dbaas/logs/:serviceName/option/{optionId}', {
    serviceName: '@serviceName',
    optionId: '@optionId',
  }, {
    terminate: { method: 'POST', url: '/dbaas/logs/:serviceName/option/:optionId/terminate' },
  });

  return optionResource;
});
