angular.module('ovh-api-services').service('OvhApiCloudProjectAclV6', ($resource, $cacheFactory) => {
  const queryCache = $cacheFactory('OvhApiCloudProjectAclV6Query');
  const cache = $cacheFactory('OvhApiCloudProjectAclV6');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.data;
    },
  };

  const acl = $resource('/cloud/project/:serviceName/acl/:accountId', {
    serviceName: '@serviceName',
    accountId: '@accountId',
  }, {
    get: { method: 'GET', cache },
    query: { method: 'GET', cache: queryCache, isArray: true },
    remove: { method: 'DELETE', interceptor },
    add: {
      url: '/cloud/project/:serviceName/acl',
      method: 'POST',
      interceptor,
    },
  });

  acl.resetCache = function () {
    cache.removeAll();
  };

  acl.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return acl;
});
