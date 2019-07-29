angular.module('ovh-api-services').service('OvhApiCloudProjectKubeV6', ($cacheFactory, $resource) => {
  const cache = $cacheFactory('OvhApiCloudProjectKubeV6');
  const queryCache = $cacheFactory('OvhApiCloudProjectKubeV6Query');

  const interceptor = {
    response(response) {
      cache.removeAll();
      queryCache.removeAll();
      return response.resource;
    },
  };

  const kubeResource = $resource('/cloud/project/:serviceName/kube/:kubeId', {
    serviceName: '@serviceName',
    kubeId: '@kubeId',
  }, {
    query: { method: 'GET', isArray: true, cache: queryCache },
    get: { method: 'GET', cache },
    save: {
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
    getRegions: {
      url: '/cloud/project/:serviceName/kube/regions',
      method: 'GET',
      cache,
      isArray: true,
    },

    // POST that acts like a GET
    getKubeConfig: {
      url: '/cloud/project/:serviceName/kube/:kubeId/kubeconfig',
      method: 'POST',
      cache,
      hasBody: false,
    },
    reset: {
      url: '/cloud/project/:serviceName/kube/:kubeId/reset',
      method: 'POST',
      interceptor,
    },
    updateVersion: {
      url: '/cloud/project/:serviceName/kube/:kubeId/update',
      method: 'POST',
      interceptor,
    },
    updatePolicy: {
      url: '/cloud/project/:serviceName/kube/:kubeId/updatePolicy',
      method: 'PUT',
      interceptor,
    },
    getSchema: {
      url: '/kube.json',
      method: 'GET',
    },
  });

  kubeResource.resetCache = function () {
    cache.removeAll();
  };

  kubeResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return kubeResource;
});
