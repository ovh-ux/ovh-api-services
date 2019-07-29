angular.module('ovh-api-services').service('OvhApiCloudProjectNetworkPrivateV6', ($resource, $cacheFactory) => {
  const queryCache = $cacheFactory('OvhApiCloudProjectNetworkPrivateV6Query');
  const cache = $cacheFactory('OvhApiCloudProjectNetworkPrivateV6');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.data;
    },
  };

  const privateNetworksResources = $resource('/cloud/project/:serviceName/network/private/:networkId', {
    serviceName: '@serviceName',
    networkId: '@networkId',
  }, {
    get: { method: 'GET', cache },
    query: { method: 'GET', cache: queryCache, isArray: true },
    save: { method: 'POST', interceptor },
  });

  privateNetworksResources.resetAllCache = function () {
    privateNetworksResources.resetCache();
    privateNetworksResources.resetQueryCache();
  };

  privateNetworksResources.resetCache = function () {
    cache.removeAll();
  };

  privateNetworksResources.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return privateNetworksResources;
});
