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
    },
    get: {
      url: '/dedicated/server/:serverName/virtualNetworkInterface/:uuid',
      method: 'GET',
      cache,
      params: {
        uuid: '@uuid',
      },
    },
    update: {
      url: '/dedicated/server/:serverName/virtualNetworkInterface/:uuid',
      method: 'PUT',
      interceptor,
      params: {
        uuid: '@uuid',
      },
    },
    delete: {
      url: '/dedicated/server/:serverName/virtualNetworkInterface/:uuid',
      method: 'DELETE',
      interceptor,
      params: {
        uuid: '@uuid',
      },
    },
    enable: {
      url: '/dedicated/server/:serverName/virtualNetworkInterface/:uuid/enable',
      method: 'POST',
      interceptor,
      params: {
        uuid: '@uuid',
      },
    },
    disable: {
      url: '/dedicated/server/:serverName/virtualNetworkInterface/:uuid/disable',
      method: 'POST',
      interceptor,
      params: {
        uuid: '@uuid',
      },
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
