angular.module('ovh-api-services').service('OvhApiDbaasLogsOutputElasticsearchKibanaAapi', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiDbaasLogsOutputElasticsearchKibanaAapi');

  const kibana = $resource('/dbaas/logs/:serviceName/kibana/:kibanaId', {
    serviceName: '@serviceName',
    kibanaId: '@kibanaId',
  }, {
    get: {
      method: 'GET',
      serviceType: 'aapi',
      cache,
      isArray: false,
    },
  });

  kibana.resetAllCache = function () {
    kibana.resetCache();
  };

  kibana.resetCache = function () {
    cache.removeAll();
  };

  return kibana;
});
