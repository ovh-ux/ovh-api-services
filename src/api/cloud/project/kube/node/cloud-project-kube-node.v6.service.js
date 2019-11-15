angular.module('ovh-api-services').service('OvhApiCloudProjectKubeNodeV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiCloudProjectKubeNodeV6');
  const queryCache = $cacheFactory('OvhApiCloudProjectKubeNodeV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.resource;
    },
  };

  const nodeResource = $resource('/cloud/project/:serviceName/kube/:kubeId/node/:nodeId', {
    serviceName: '@serviceName',
    kubeId: '@kubeId',
    nodeId: '@nodeId',
  }, {
    query: { method: 'GET', isArray: true, cache: queryCache },
    get: { method: 'GET', cache },
    save: {
      method: 'POST',
      interceptor,
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
