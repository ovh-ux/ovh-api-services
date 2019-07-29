angular.module('ovh-api-services').service('OvhApiKubePublicCloudNodeV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiKubePublicCloudNodeV6');
  const queryCache = $cacheFactory('OvhApiKubePublicCloudNodeV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.resource;
    },
  };

  const nodeResource = $resource('/kube/:serviceName/publiccloud/node/:nodeId', {
    serviceName: '@serviceName',
    nodeId: '@nodeId',
  }, {
    query: { method: 'GET', isArray: true, cache: queryCache },
    get: { method: 'GET', cache },
    save: {
      method: 'POST',
      interceptor,
      params: {
        flavorName: '@flavorName',
      },
    },
    delete: { method: 'DELETE', interceptor },
  });

  nodeResource.resetCache = function () {
    cache.removeAll();
  };

  nodeResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return nodeResource;
});
