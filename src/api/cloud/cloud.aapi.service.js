angular.module('ovh-api-services').service('OvhApiCloudAapi', ($resource, $cacheFactory) => {
  const queryCache = $cacheFactory('OvhApiCloudAapiQuery');

  const instancesResource = $resource('/cloud/instances', {}, {
    query: {
      method: 'GET',
      isArray: true,
      serviceType: 'aapi',
      cache: queryCache,
    },
  });

  instancesResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return instancesResource;
});
