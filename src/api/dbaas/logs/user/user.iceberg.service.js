angular.module('ovh-api-services').service('OvhApiDbaasLogsUserIceberg', (iceberg) => {
  const userResource = iceberg('/dbaas/logs/:serviceName', {
    serviceName: '@serviceName',
  }, {
    me: { method: 'GET' },
    updateUser: { method: 'PUT' },
    changePassword: { method: 'POST', url: '/dbaas/logs/:serviceName/user/changePassword' },
  });

  return userResource;
});
