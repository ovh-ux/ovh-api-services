angular.module('ovh-api-services').service('OvhApiDbaasLogsOutputElasticsearchKibanaIceberg', (iceberg) => {
  const kibanaResource = iceberg('/dbaas/logs/:serviceName/output/elasticsearch/kibana/:kibanaId', {
    serviceName: '@serviceName',
    kibanaId: '@kibanaId',
  }, {
    create: { method: 'POST' },
  });

  return kibanaResource;
});  
