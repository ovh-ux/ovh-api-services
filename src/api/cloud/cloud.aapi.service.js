angular.module('ovh-api-services').service('OvhApiCloudAapi', ($resource, $cacheFactory) => {
  const queryCache = $cacheFactory('OvhApiCloudAapiQuery');

  const instancesResource = $resource('/cloud/instances', {}, {
    query: {
      method: 'GET',
      isArray: true,
      serviceType: 'aapi',
      cache: queryCache,
    },
    getDeals: {
      method: 'GET',
      url: '/cloud/deals',
      serviceType: 'aapi',
    },
  });

  instancesResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return instancesResource;
});
