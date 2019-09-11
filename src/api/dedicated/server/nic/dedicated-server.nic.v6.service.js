angular.module('ovh-api-services').service('OvhApiDedicatedServerNicV6', ($resource, $cacheFactory) => {
  const otherCache = $cacheFactory('OvhApiDedicatedServerNicV6');
  const queryCache = $cacheFactory('OvhApiDedicatedServerNicV6Query');

  const dedicatedServerNicResource = $resource('/dedicated/server/:serverName/networkInterfaceController', {
    serverName: '@serverName',
  }, {
    query: { method: 'GET', cache: queryCache, isArray: true },
    get: {
      url: '/dedicated/server/:serverName/networkInterfaceController/:mac',
      method: 'GET',
      cache: otherCache,
    },
  });

  dedicatedServerNicResource.resetAllCache = function resetAllCache() {
    dedicatedServerNicResource.resetOtherCache();
    dedicatedServerNicResource.resetQueryCache();
  };

  dedicatedServerNicResource.resetOtherCache = function resetOtherCache() {
    otherCache.removeAll();
  };

  dedicatedServerNicResource.resetQueryCache = function resetQueryCache() {
    queryCache.removeAll();
  };

  return dedicatedServerNicResource;
});
