angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectAiServingMetricsV6', ($resource, $cacheFactory) => {
    const queryCache = $cacheFactory('OvhApiCloudProjectAiServingMetricsV6Query');
    return $resource('/cloud/project/:serviceName/ai/serving/:namespaceId/metrics', {
      serviceName: '@serviceName',
      namespaceId: '@namespaceId',
    }, {
      query: {
        method: 'GET',
        cache: queryCache,
      },
    });
  });
