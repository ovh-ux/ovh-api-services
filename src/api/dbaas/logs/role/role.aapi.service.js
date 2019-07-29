angular.module('ovh-api-services').service('OvhApiDbaasLogsRoleAapi', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiDbaasLogsRoleAapi');

  const role = $resource('/dbaas/logs/:serviceName/role/:roleId', {
    serviceName: '@serviceName',
    roleId: '@roleId',
  }, {
    get: {
      method: 'GET',
      serviceType: 'aapi',
      cache,
    },
  });

  role.resetAllCache = function () {
    role.resetCache();
  };

  role.resetCache = function () {
    cache.removeAll();
  };

  return role;
});
