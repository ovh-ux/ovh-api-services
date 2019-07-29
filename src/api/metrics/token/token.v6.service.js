angular
  .module('ovh-api-services')
  .service('OvhApiMetricsTokenV6', ($resource, $cacheFactory) => {
    const cache = $cacheFactory('OvhApiMetricsTokenV6');
    const queryCache = $cacheFactory('OvhApiMetricsTokenV6Query');

    const interceptor = {
      response(response) {
        cache.removeAll();
        return response.data;
      },
    };

    const resource = $resource('/metrics/:serviceName/token/:tokenID', {
      serviceName: '@serviceName',
      tokenID: '@tokenID',
    }, {
      get: { method: 'GET', cache },
      query: { method: 'GET', cache: queryCache, isArray: true },
      delete: { method: 'DELETE', interceptor },
      edit: { method: 'PUT', interceptor },
    });

    resource.resetAllCache = function () {
      resource.resetCache();
      resource.resetQueryCache();
    };

    resource.resetCache = function () {
      cache.removeAll();
    };

    resource.resetQueryCache = function () {
      queryCache.removeAll();
    };

    return resource;
  });
