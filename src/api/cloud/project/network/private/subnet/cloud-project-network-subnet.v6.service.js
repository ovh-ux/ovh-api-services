angular.module('ovh-api-services').service('OvhApiCloudProjectNetworkPrivateSubnetV6', ($resource, $cacheFactory) => {
  const queryCache = $cacheFactory('OvhApiCloudProjectNetworkPrivateSubnetV6Query');
  const cache = $cacheFactory('OvhApiCloudProjectNetworkPrivateSubnetV6');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.data;
    },
  };

  const privateNetworkSubnetResources = $resource('/cloud/project/:serviceName/network/private/:networkId/subnet/:subnetId', {
    serviceName: '@serviceName',
    networkId: '@networkId',
    subnetId: '@subnetId',
  }, {
    get: { method: 'GET', cache },
    query: { method: 'GET', cache: queryCache, isArray: true },
    save: { method: 'POST', interceptor },
  });

  privateNetworkSubnetResources.resetAllCache = function () {
    privateNetworkSubnetResources.resetCache();
    privateNetworkSubnetResources.resetQueryCache();
  };

  privateNetworkSubnetResources.resetCache = function () {
    cache.removeAll();
  };

  privateNetworkSubnetResources.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return privateNetworkSubnetResources;
});
