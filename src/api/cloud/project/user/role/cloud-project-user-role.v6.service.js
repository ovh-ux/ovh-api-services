angular.module('ovh-api-services').service('OvhApiCloudProjectUserRoleV6', ($resource, $cacheFactory) => {
  const queryCache = $cacheFactory('OvhApiCloudProjectUserRoleV6Query');
  const cache = $cacheFactory('OvhApiCloudProjectUserRoleV6');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.data;
    },
  };

  const roles = $resource('/cloud/project/:serviceName/user/:userId/role/:roleId', {
    serviceName: '@serviceName',
    userId: '@userId',
    roleId: '@roleId',
  }, {
    query: { method: 'GET', cache: queryCache, isArray: true },
    save: { method: 'POST', interceptor },
    get: { method: 'GET', cache },
    delete: { method: 'DELETE', interceptor },
    put: {
      method: 'PUT',
      interceptor,
      url: '/cloud/project/:serviceName/user/:userId/role',
    },
  });

  roles.resetCache = function () {
    cache.removeAll();
  };

  roles.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return roles;
});
