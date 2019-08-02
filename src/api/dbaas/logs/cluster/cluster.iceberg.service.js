angular.module('ovh-api-services').service('OvhApiDbaasLogsClusterIceberg', (iceberg) => {
  const clusterResource = iceberg('/dbaas/logs/:serviceName/cluster/:clusterId', {
    serviceName: '@serviceName',
    clusterId: '@clusterId',
  });

  return clusterResource;
});
