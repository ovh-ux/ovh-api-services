angular.module('ovh-api-services').service('OvhApiCloudProjectVolumeSnapshotV6', ($resource, $cacheFactory) => {
  const queryCache = $cacheFactory('OvhApiCloudProjectVolumeSnapshotV6Query');
  const cache = $cacheFactory('OvhApiCloudProjectVolumeSnapshotV6');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.data;
    },
  };

  const volumesSnapshotResource = $resource('/cloud/project/:serviceName/volume/snapshot/:snapshotId', {
    serviceName: '@serviceName',
    volumeId: '@snapshotId',
  }, {
    get: { method: 'GET', cache },
    query: { method: 'GET', cache: queryCache, isArray: true },
    delete: { method: 'DELETE', interceptor },
    create: {
      url: '/cloud/project/:serviceName/volume/:volumeId/snapshot',
      method: 'POST',
      param: {
        serviceName: '@serviceName',
        volumeId: '@volumeId',
      },
      interceptor,
    },
  });

  volumesSnapshotResource.resetAllCache = function () {
    volumesSnapshotResource.resetCache();
    volumesSnapshotResource.resetQueryCache();
  };

  volumesSnapshotResource.resetCache = function () {
    cache.removeAll();
  };

  volumesSnapshotResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return volumesSnapshotResource;
});
