angular
  .module('ovh-api-services')
  .service('OvhApiDedicatedCloudServicePacksV6', ($resource, $cacheFactory) => {
    const queryCache = $cacheFactory('OvhApiDedicatedCloudServicePacksV6Query');
    const cache = $cacheFactory('OvhApiDedicatedCloudServicePacksV6');

    const servicePacksResource = $resource('/dedicatedCloud/:serviceName/servicePacks/:name', {
      name: '@name',
      serviceName: '@serviceName',
    }, {
      get: {
        cache,
        method: 'GET',
      },
      query: {
        cache: queryCache,
        isArray: true,
        method: 'GET',
      },
    });

    servicePacksResource.resetCache = function () {
      cache.removeAll();
    };

    servicePacksResource.resetQueryCache = function () {
      queryCache.removeAll();
    };

    return servicePacksResource;
  });
