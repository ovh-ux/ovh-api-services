angular.module('ovh-api-services').service('OvhApiCloudProjectVolumeV6', ($resource, $cacheFactory) => {
  const queryCache = $cacheFactory('OvhApiCloudProjectVolumeV6Query');
  const cache = $cacheFactory('OvhApiCloudProjectVolumeV6');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.data;
    },
  };

  const volumesResource = $resource('/cloud/project/:serviceName/volume/:volumeId', {
    serviceName: '@serviceName',
    volumeId: '@volumeId',
  }, {
    get: { method: 'GET', cache },
    query: { method: 'GET', cache: queryCache, isArray: true },
    save: { method: 'POST', interceptor },
    remove: { method: 'DELETE', interceptor },
    delete: { method: 'DELETE', interceptor },
    put: {
      method: 'PUT',
      interceptor,
    },
    attach: {
      url: '/cloud/project/:serviceName/volume/:volumeId/attach',
      method: 'POST',
      interceptor,
    },
    detach: {
      url: '/cloud/project/:serviceName/volume/:volumeId/detach',
      method: 'POST',
      interceptor,
    },
    upsize: {
      url: '/cloud/project/:serviceName/volume/:volumeId/upsize',
      method: 'POST',
      interceptor,
    },
  });

  volumesResource.resetAllCache = function () {
    volumesResource.resetCache();
    volumesResource.resetQueryCache();
  };

  volumesResource.resetCache = function () {
    cache.removeAll();
  };

  volumesResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return volumesResource;
});
