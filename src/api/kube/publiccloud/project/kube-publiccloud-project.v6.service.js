angular.module('ovh-api-services').service('OvhApiKubePublicCloudProjectV6', ($resource, $cacheFactory) => {
  const queryCache = $cacheFactory('OvhApiKubePublicCloudProjectV6Query');

  const projectResource = $resource('/kube/:serviceName/publiccloud/project', {
    serviceName: '@serviceName',
  }, {
    query: { method: 'GET', cache: queryCache },
  });

  projectResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return projectResource;
});
