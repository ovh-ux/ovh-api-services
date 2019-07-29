angular.module('ovh-api-services').service('OvhApiDedicatedCloudFederationActiveDirectoryV6', ($resource, $cacheFactory) => {
  const queryCache = $cacheFactory('OvhApiDedicatedCloudFederationActiveDirectoryV6Query');
  const cache = $cacheFactory('OvhApiDedicatedCloudFederationActiveDirectoryV6');

  const activeDirectoryResource = $resource('/dedicatedCloud/:serviceName/federation/activeDirectory/:activeDirectoryId', {
    serviceName: '@serviceName',
    activeDirectoryId: '@activeDirectoryId',
  }, {
    query: { method: 'GET', cache: queryCache, isArray: true },
    get: { method: 'GET', cache },
  });

  activeDirectoryResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  activeDirectoryResource.resetCache = function () {
    cache.removeAll();
  };

  return activeDirectoryResource;
});
