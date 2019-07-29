angular.module('ovh-api-services').service('OvhApiDbaasLogsAliasAapi', ($resource) => {
  // No cache here, because items can be shared at any moment by other users

  const alias = $resource('/dbaas/logs/:serviceName/alias/:aliasId', {}, {
    get: {
      method: 'GET',
      serviceType: 'aapi',
    },
  });

  return alias;
});
