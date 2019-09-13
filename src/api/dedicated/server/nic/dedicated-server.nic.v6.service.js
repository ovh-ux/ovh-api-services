angular.module('ovh-api-services').service('OvhApiDedicatedServerPhysicalInterfaceV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiDedicatedServerPhysicalInterfaceV6');

  const interceptor = {
    response(response) {
      dedicatedServerPhysicalInterfaceResource.resetCache();
      return response.data;
    },
  };

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
    bind: {
      url: '/dedicated/server/:serverName/networkInterfaceController/:mac/bind',
      method: 'POST',
      interceptor,
      params: {
        virtualNetworkInterface: '@virtualNetworkInterface',
      },
    },
    unbind: {
      url: '/dedicated/server/:serverName/networkInterfaceController/:mac/unbind',
      method: 'POST',
      interceptor,
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
