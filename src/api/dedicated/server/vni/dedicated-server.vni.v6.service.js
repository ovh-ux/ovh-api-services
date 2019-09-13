angular.module('ovh-api-services').service('OvhApiDedicatedServerVirtualInterfaceV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiDedicatedServerVirtualInterfaceV6');

  const interceptor = {
    response(response) {
      dedicatedServerVirtualInterfaceResource.resetCache();
      return response.data;
    },
  };

  const dedicatedServerVirtualInterfaceResource = $resource('/dedicated/server/:serverName/virtualNetworkInterface', {
    serverName: '@serverName',
  }, {
    query: {
      method: 'GET',
      cache,
      isArray: true,
      params: {
        enabled: '@enabled',
        mode: '@mode',
        name: '@name',
        vrack: '@vrack',
      },
    },
    create: {
      url: '/dedicated/server/:serverName/virtualNetworkInterface',
      method: 'POST',
      interceptor,
      params: {
        mode: '@mode',
        name: '@name',
      },
    },
    get: {
      url: '/dedicated/server/:serverName/virtualNetworkInterface/:uuid',
      method: 'GET',
      cache,
    },
    update: {
      url: '/dedicated/server/:serverName/virtualNetworkInterface/:uuid',
      method: 'PUT',
      interceptor,
      params: {
        VirtualNetworkInterface: '@virtualNetworkInterface',
      },
    },
    delete: {
      url: '/dedicated/server/:serverName/virtualNetworkInterface/:uuid',
      method: 'DELETE',
      interceptor,
    },
    enable: {
      url: '/dedicated/server/:serverName/virtualNetworkInterface/:uuid/enable',
      method: 'POST',
      interceptor,
    },
    disable: {
      url: '/dedicated/server/:serverName/virtualNetworkInterface/:uuid/disable',
      method: 'POST',
      interceptor,
    },
  });

  dedicatedServerVirtualInterfaceResource.resetAllCache = function resetAllCache() {
    dedicatedServerVirtualInterfaceResource.resetCache();
  };

  dedicatedServerVirtualInterfaceResource.resetCache = function resetCache() {
    cache.removeAll();
  };

  return dedicatedServerVirtualInterfaceResource;
});
