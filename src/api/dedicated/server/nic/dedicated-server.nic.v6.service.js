angular.module('ovh-api-services').service('OvhApiDedicatedServerPhysicalInterfaceV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiDedicatedServerPhysicalInterfaceV6');

  const dedicatedServerPhysicalInterfaceResource = $resource('/dedicated/server/:serverName/networkInterfaceController', {
    serverName: '@serverName',
  }, {
    query: {
      method: 'GET',
      cache,
      isArray: true,
      params: {
        linkType: '@linkType',
      },
    },
    get: {
      url: '/dedicated/server/:serverName/networkInterfaceController/:mac',
      method: 'GET',
      cache,
    },
    mrtg: {
      url: '/dedicated/server/:serverName/networkInterfaceController/:mac/mrtg',
      method: 'GET',
      cache,
      isArray: true,
      params: {
        period: '@period',
        type: '@type',
      },
    },
  });

  dedicatedServerPhysicalInterfaceResource.resetAllCache = function resetAllCache() {
    dedicatedServerPhysicalInterfaceResource.resetCache();
  };

  dedicatedServerPhysicalInterfaceResource.resetCache = function resetCache() {
    cache.removeAll();
  };

  return dedicatedServerPhysicalInterfaceResource;
});
