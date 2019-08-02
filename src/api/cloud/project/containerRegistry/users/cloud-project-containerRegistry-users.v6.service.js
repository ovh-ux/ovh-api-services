angular.module('ovh-api-services').service('OvhApiCloudProjectContainerRegistryUsersV6', ($cacheFactory, $resource) => {
  const cache = $cacheFactory('OvhApiCloudProjectContainerRegistryUsersV6');
  const queryCache = $cacheFactory('OvhApiCloudProjectContainerRegistryUsersV6Query');

  const interceptor = {
    response(response) {
      cache.removeAll();
      queryCache.removeAll();
      return response.resource;
    },
  };

  const usersResource = $resource('/cloud/project/:serviceName/containerRegistry/:registryID/users/:userID', {
    serviceName: '@serviceName',
    registryID: '@registryID',
    usersID: '@userID',
  }, {
    query: { method: 'GET', isArray: true, cache: queryCache },
    get: { method: 'GET', cache },
    create: {
      method: 'POST',
      interceptor,
      hasBody: false,
    },
    delete: {
      method: 'DELETE',
      interceptor,
    },
  });

  usersResource.resetCache = function () {
    cache.removeAll();
  };

  usersResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return usersResource;
});
