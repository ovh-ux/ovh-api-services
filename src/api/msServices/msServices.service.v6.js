angular
  .module('ovh-api-services')
  .service('OvhApiMsServicesV6', ($resource, $cacheFactory) => {
    const cache = $cacheFactory('OvhApiMsServicesV6');
    const queryCache = $cacheFactory('OvhApiMsServicesV6Query');

    const interceptor = {
      response(response) {
        cache.remove(response.config.url);
        queryCache.removeAll();
        return response.resource;
      },
    };

    const resource = $resource('/msServices/:serviceName', {
      serviceName: '@serviceName',
    }, {
      query: {
        method: 'GET', cache, isArray: true, url: '/msServices',
      },
      get: { method: 'GET', cache, isArray: false },
      edit: {
        method: 'PUT', cache, isArray: false, interceptor,
      },
    });

    resource.resetCache = function () {
      cache.removeAll();
    };

    resource.resetQueryCache = function () {
      queryCache.removeAll();
    };

    resource.resetAllCache = function () {
      this.resetCache();
      this.resetQueryCache();
    };

    return resource;
  });
