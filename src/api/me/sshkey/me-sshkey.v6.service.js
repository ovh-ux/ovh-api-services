angular.module('ovh-api-services').service('OvhApiMeSshKeyV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiMeSshKeyV6');
  const queryCache = $cacheFactory('OvhApiMeSshKeyV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.resource;
    },
  };

  const resource = $resource('/me/sshKey/:keyName', { keyName: '@keyName' }, {
    query: { method: 'GET', cache: queryCache, isArray: true },
    get: { method: 'GET', cache },
    create: { method: 'POST', interceptor },
    edit: { method: 'PUT', interceptor },
    delete: { method: 'DELETE', interceptor },
  });

  resource.resetCache = function () {
    cache.removeAll();
  };

  resource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  resource.resetAllCache = function () {
    resource.resetCache();
    resource.resetQueryCache();
  };

  return resource;
});
