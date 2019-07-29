angular.module('ovh-api-services').service('OvhApiCloudProjectKubeAapi', ($cacheFactory, $resource) => {
  const cache = $cacheFactory('OvhApiCloudProjectKubeAapi');

  const cloudProjectKubeResource = $resource('/cloud/project/:serviceName/kube', {
    serviceName: '@serviceName',
  }, {
    query: {
      method: 'GET',
      serviceType: 'aapi',
      cache,
    },
  });

  cloudProjectKubeResource.resetAllCache = function () {
    cloudProjectKubeResource.resetCache();
  };

  cloudProjectKubeResource.resetCache = function () {
    cache.removeAll();
  };

  return cloudProjectKubeResource;
});
