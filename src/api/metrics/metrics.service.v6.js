angular
  .module('ovh-api-services')
  .service('OvhApiMetricsV6', ($resource, $cacheFactory) => {
    const cache = $cacheFactory('OvhApiMetricsV6');
    const queryCache = $cacheFactory('OvhApiMetricsV6Query');
    const interceptor = {
      response(response) {
        cache.removeAll();
        queryCache.removeAll();
        return response.data;
      },
    };
    const resource = $resource('/metrics/:serviceName', {
      serviceName: '@serviceName',
    }, {
      query: { method: 'GET', cache: queryCache, isArray: true },
      get: { method: 'GET', cache },
      edit: { method: 'PUT', interceptor },
      getServiceInfos: {
        url: '/metrics/:serviceName/serviceInfos',
        method: 'GET',
        cache,
      },
      getConsumption: {
        url: '/metrics/:serviceName/consumption',
        method: 'GET',
      },
      setQuota: {
        url: '/metrics/:serviceName/quota',
        method: 'PUT',
        interceptor,
      },
    });

    resource.resetCache = function () {
      cache.removeAll();
    };

    resource.resetQueryCache = function () {
      queryCache.removeAll();
    };

    resource.resetAllCache = function () {
      resource.resetCache();
      resource.resetQueryCache();
    };

    return resource;
  });
