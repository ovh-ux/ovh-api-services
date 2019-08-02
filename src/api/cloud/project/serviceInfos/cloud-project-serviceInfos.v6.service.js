angular.module('ovh-api-services').service('OvhApiCloudProjectServiceInfosV6', ($resource, $cacheFactory) => {
  const queryCache = $cacheFactory('OvhApiCloudProjectServiceInfosV6Query');
  const cache = $cacheFactory('OvhApiCloudProjectServiceInfosV6');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.data;
    },
  };

  const serviceInfosResource = $resource('/cloud/project/:serviceName/serviceInfos', {
    serviceName: '@serviceName',
  }, {
    get: { method: 'GET', cache },
    query: { method: 'GET', cache, isArray: true },
    put: { method: 'PUT', interceptor },
  });

  serviceInfosResource.resetCache = function () {
    cache.removeAll();
  };

  serviceInfosResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return serviceInfosResource;
});
