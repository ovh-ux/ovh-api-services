angular.module('ovh-api-services').service('OvhApiCloudProjectContainerRegistryV6', ($cacheFactory, $resource) => {
  const cache = $cacheFactory('OvhApiCloudProjectContainerRegistryV6');
  const queryCache = $cacheFactory('OvhApiCloudProjectContainerRegistryV6Query');

  const interceptor = {
    response(response) {
      cache.removeAll();
      queryCache.removeAll();
      return response.resource;
    },
  };

  const registryResource = $resource('/cloud/project/:serviceName/containerRegistry/:registryID', {
    serviceName: '@serviceName',
    registryID: '@registryID',
  }, {
    query: { method: 'GET', isArray: true, cache: queryCache },
    get: { method: 'GET', cache },
    create: {
      method: 'POST',
      interceptor,
    },
    update: {
      method: 'PUT',
      interceptor,
      params: {
        name: '@name',
      },
    },
    delete: {
      method: 'DELETE',
      interceptor,
    },
  });

  registryResource.resetCache = function () {
    cache.removeAll();
  };

  registryResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return registryResource;
});
