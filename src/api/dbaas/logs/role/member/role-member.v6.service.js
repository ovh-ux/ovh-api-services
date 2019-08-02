angular.module('ovh-api-services').service('OvhApiDbaasLogsRoleMemberV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiDbaasLogsRoleMemberV6');
  const queryCache = $cacheFactory('OvhApiDbaasLogsRoleMemberV6Query');
  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response;
    },
  };

  const memberResource = $resource('/dbaas/logs/:serviceName/role/:roleId/member/:username', {
    serviceName: '@serviceName',
    roleId: '@roleId',
    username: '@username',
  }, {
    query: { method: 'GET', cache: queryCache, isArray: true },
    create: { method: 'POST', interceptor, url: '/dbaas/logs/:serviceName/role/:roleId/member' },
    update: { method: 'PUT', interceptor },
    remove: { method: 'DELETE', interceptor },
  });

  memberResource.resetAllCache = function () {
    memberResource.resetCache();
    memberResource.resetQueryCache();
  };

  memberResource.resetCache = function () {
    cache.removeAll();
  };

  memberResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return memberResource;
});
