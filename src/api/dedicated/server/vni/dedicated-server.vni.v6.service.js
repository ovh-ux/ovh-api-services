angular.module('ovh-api-services').service('OvhApiDedicatedServerVniV6', ($resource, $cacheFactory) => {
  const otherCache = $cacheFactory('OvhApiDedicatedServerVniV6');
  const queryCache = $cacheFactory('OvhApiDedicatedServerVniV6Query');

  const dedicatedServerVniResource = $resource('/dedicated/server/:serverName/virtualNetworkInterface', {
    serverName: '@serverName',
  }, {
    query: { method: 'GET', cache: queryCache, isArray: true },
    get: {
      url: '/dedicated/server/:serverName/virtualNetworkInterface/:uuid',
      method: 'GET',
      cache: otherCache,
    },
  });

  dedicatedServerVniResource.resetAllCache = function resetAllCache() {
    dedicatedServerVniResource.resetOtherCache();
    dedicatedServerVniResource.resetQueryCache();
  };

  dedicatedServerVniResource.resetOtherCache = function resetOtherCache() {
    otherCache.removeAll();
  };

  dedicatedServerVniResource.resetQueryCache = function resetQueryCache() {
    queryCache.removeAll();
  };

  return dedicatedServerVniResource;
});
