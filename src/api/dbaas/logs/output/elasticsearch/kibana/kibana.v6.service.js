angular.module('ovh-api-services').service('OvhApiDbaasLogsOutputElasticsearchKibanaV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiDbaasLogsOutputElasticsearchKibanaV6');
  const queryCache = $cacheFactory('OvhApiDbaasLogsOutputElasticsearchKibanaV6Query');
  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response;
    },
  };

  const kibanaResource = $resource('/dbaas/logs/:serviceName/output/elasticsearch/kibana/:kibanaId', {
    serviceName: '@serviceName',
    kibanaId: '@kibanaId',
  }, {
    query: { method: 'GET', isArray: true, cache: queryCache },
    create: { method: 'POST', interceptor },
    remove: { method: 'DELETE', interceptor },
    update: { method: 'PUT', interceptor },
  });

  kibanaResource.resetAllCache = function () {
    kibanaResource.resetCache();
    kibanaResource.resetQueryCache();
  };

  kibanaResource.resetCache = function () {
    cache.removeAll();
  };

  kibanaResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return kibanaResource;
});
