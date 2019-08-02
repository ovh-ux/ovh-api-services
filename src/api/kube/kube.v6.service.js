angular.module('ovh-api-services').service('OvhApiKubeV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiKubeV6');
  const queryCache = $cacheFactory('OvhApiKubeV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.resource;
    },
  };

  const kubeResource = $resource('/kube/:serviceName', {
    serviceName: '@serviceName',
  }, {
    query: { method: 'GET', isArray: true, cache: queryCache },
    get: { method: 'GET', cache },
    update: {
      method: 'PUT',
      interceptor,
      params: {
        name: '@name',
      },
    },
    getKubeConfig: {
      url: '/kube/:serviceName/kubeconfig',
      method: 'GET',
      cache,
    },
    getServiceInfos: {
      url: '/kube/:serviceName/serviceInfos',
      method: 'GET',
      cache,
    },
    reset: {
      url: '/kube/:serviceName/reset',
      method: 'POST',
      interceptor,
    },
    updateServiceInfos: {
      url: '/kube/:serviceName/serviceInfos',
      method: 'PUT',
      interceptor,
    },
    updateVersion: {
      url: '/kube/:serviceName/update',
      method: 'POST',
      interceptor,
    },
    updatePolicy: {
      url: '/kube/:serviceName/updatePolicy',
      method: 'PUT',
      interceptor,
    },
    getSchema: {
      url: '/kube.json',
      method: 'GET',
    },
    terminate: {
      url: '/kube/:serviceName/terminate',
      method: 'POST',
      interceptor,
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
