angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectDataProcessingMetricsIceberg', (iceberg, $cacheFactory) => {
    const queryCache = $cacheFactory('OvhApiDataprocessingIcebergQuery');
    return iceberg('/cloud/project/:serviceName/dataProcessing/metrics', {
      serviceName: '@serviceName',
    }, {
      query: {
        method: 'GET',
        cache: queryCache,
      },
    });
  });
