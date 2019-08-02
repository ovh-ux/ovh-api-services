angular.module('ovh-api-services').service('OvhApiDbaasLogsRoleV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiDbaasLogsRoleV6');
  const queryCache = $cacheFactory('OvhApiDbaasLogsRoleV6Query');
  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response;
    },
  };

  const roleResource = $resource('/dbaas/logs/:serviceName/role/:roleId', {
    serviceName: '@serviceName',
    roleId: '@roleId',
  }, {
    query: { method: 'GET', cache: queryCache, isArray: true },
    getDetail: { method: 'GET', cache },
    create: { method: 'POST', interceptor },
    update: { method: 'PUT', interceptor },
    remove: { method: 'DELETE', interceptor },
  });

  roleResource.resetAllCache = function () {
    roleResource.resetCache();
    roleResource.resetQueryCache();
  };

  roleResource.resetCache = function () {
    cache.removeAll();
  };

  roleResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return roleResource;
});
