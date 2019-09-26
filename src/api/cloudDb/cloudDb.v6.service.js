angular.module('ovh-api-services').service('OvhApiCloudDBV6', ($resource, $cacheFactory) => {
  const queryCache = $cacheFactory('OvhApiCloudDBV6Query');

  const cloudDbResource = $resource('/cloudDB', {}, {
    query: {
      method: 'GET',
      isArray: true,
      cache: queryCache,
    },
  });

  cloudDbResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return cloudDbResource;
});
