import sortBy from 'lodash/sortBy';

angular.module('ovh-api-services').service('OvhApiCloudProjectSnapshotV6', ($resource, $cacheFactory) => {
  const queryCache = $cacheFactory('OvhApiCloudProjectSnapshotV6Query');
  const cache = $cacheFactory('OvhApiCloudProjectSnapshotV6');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.data;
    },
  };

  const snapshot = $resource('/cloud/project/:serviceName/snapshot/:snapshotId', {
    serviceName: '@serviceName',
    snapshotId: '@snapshotId',
  }, {
    get: { method: 'GET', cache },
    query: {
      method: 'GET',
      cache: queryCache,
      isArray: true,
      transformResponse(snapshotsResp, headers, status) {
        let snapshots = snapshotsResp;

        if (status === 200) {
          snapshots = angular.fromJson(snapshots); // IE11
          return sortBy(snapshots, 'name');
        }
        return snapshots;
      },
    },
    save: { method: 'POST', interceptor },
    remove: { method: 'DELETE', interceptor },
    delete: { method: 'DELETE', interceptor },
  });

  snapshot.resetCache = function () {
    cache.removeAll();
  };

  snapshot.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return snapshot;
});
