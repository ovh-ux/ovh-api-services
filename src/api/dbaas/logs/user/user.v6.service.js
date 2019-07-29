angular.module('ovh-api-services').service('OvhApiDbaasLogsUserV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiDbaasLogsUserV6');
  const userResource = $resource('/dbaas/logs/:serviceName', {
    serviceName: '@serviceName',
  }, {
    me: { method: 'GET', cache },
    updateUser: { method: 'PUT' },
    changePassword: { method: 'POST', url: '/dbaas/logs/:serviceName/user/changePassword' },
  });

  userResource.resetCache = function () {
    cache.removeAll();
  };

  userResource.resetAllCache = function () {
    userResource.resetCache();
  };

  return userResource;
});
