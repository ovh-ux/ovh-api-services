angular.module('ovh-api-services').service('OvhApiCloudDBEnterpriseUserV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiCloudDBEnterpriseUserV6');
  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      return response;
    },
  };

  const userResource = $resource('/cloudDB/enterprise/cluster/:clusterId/user', {
    clusterId: '@clusterId',
  }, {
    get: { method: 'GET', cache },
    create: { method: 'POST', interceptor },
  });

  userResource.resetCache = function () {
    cache.removeAll();
  };

  return userResource;
});
