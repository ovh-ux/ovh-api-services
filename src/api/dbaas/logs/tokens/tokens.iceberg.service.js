angular.module('ovh-api-services').service('OvhApiDbaasLogsTokensIceberg', (iceberg) => {
  const tokenResource = iceberg('/dbaas/logs/:serviceName/token/:tokenId', {
    serviceName: '@serviceName',
  }, {
    create: { method: 'POST' },
  });

  return tokenResource;
});
