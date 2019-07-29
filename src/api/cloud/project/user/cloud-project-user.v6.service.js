angular.module('ovh-api-services').service('OvhApiCloudProjectUserV6', ($resource, $cacheFactory) => {
  const queryCache = $cacheFactory('OvhApiCloudProjectUserV6Query');
  const cache = $cacheFactory('OvhApiCloudProjectUserV6');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.data;
    },
  };

  const servicesDefinition = {
    rclone: {
      method: 'GET',
      url: '/cloud/project/:serviceName/user/:userId/rclone',
    },
  };

  const users = $resource('/cloud/project/:serviceName/user/:userId', {
    serviceName: '@serviceName',
    userId: '@userId',
  }, {
    get: { method: 'GET', cache },
    query: { method: 'GET', cache: queryCache, isArray: true },
    remove: { method: 'DELETE', interceptor },
    password: { method: 'POST', url: '/cloud/project/:serviceName/user/:userId/regeneratePassword' },
    token: { method: 'POST', url: '/cloud/project/:serviceName/user/:userId/token' },
    openrc: { method: 'GET', url: '/cloud/project/:serviceName/user/:userId/openrc' },
    ec2Credential: { method: 'POST', url: '/cloud/project/:serviceName/user/:userId/ec2Credential' },
    rclone: { method: 'GET', url: '/cloud/project/:serviceName/user/:userId/rclone' },
  }, servicesDefinition);
  users.services = servicesDefinition;

  users.resetCache = function () {
    cache.removeAll();
  };

  users.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return users;
});
