angular.module('ovh-api-services').service('OvhApiDedicatedCloudFederationV6', ($resource, $cacheFactory) => {
  const queryCache = $cacheFactory('OvhApiDedicatedCloudFederationV6Query');

  const federationResource = $resource('/dedicatedCloud/:serviceName/federation', {
    serviceName: '@serviceName',
  }, {
    query: { method: 'GET', cache: queryCache },
  });

  federationResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return federationResource;
});
