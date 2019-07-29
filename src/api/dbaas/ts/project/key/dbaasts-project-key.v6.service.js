angular.module('ovh-api-services').service('OvhApiDBaasTsProjectKeyV6', ($resource, $q, $cacheFactory) => {
  const queryCache = $cacheFactory('OvhApiDBaasTsProjectKeyV6Query');
  const cache = $cacheFactory('OvhApiDBaasTsProjectKeyV6');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.data;
    },
  };

  const keyResource = $resource('/dbaas/timeseries/:serviceName/key/:keyId', {
    serviceName: '@serviceName',
    keyId: '@keyId',
  }, {
    get: { method: 'GET', cache },
    query: { method: 'GET', cache: queryCache, isArray: true },
    create: { method: 'POST', interceptor },
    delete: { method: 'DELETE', interceptor },
    update: { method: 'PUT', interceptor },
  });

  keyResource.queryDetails = function (serviceName) {
    const queue = [];
    return keyResource.query({ serviceName }).$promise
      .then((keyIds) => {
        angular.forEach(keyIds, (keyId) => {
          queue.push(
            keyResource.get({
              serviceName,
              keyId,
            }).$promise,
          );
        });
        return $q.all(queue);
      });
  };

  keyResource.resetAllCache = function () {
    keyResource.resetCache();
    keyResource.resetQueryCache();
  };

  keyResource.resetCache = function () {
    cache.removeAll();
  };

  keyResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return keyResource;
});
