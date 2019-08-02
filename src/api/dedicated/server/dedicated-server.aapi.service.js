angular.module('ovh-api-services').service('OvhApiDedicatedServerAapi', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiDedicatedServerAapi');

  const dedicatedServerResource = $resource('/dedicated/server/:serverName', {
    serverName: '@serverName',
  }, {
    get: {
      method: 'GET',
      serviceType: 'aapi',
      cache,
    },
    rtm: {
      url: '/dedicated/server/rtm/:type/:period',
      method: 'GET',
      serviceType: 'aapi',
      isArray: true,
    },
    query: {
      url: '/dedicated/server/detail/all',
      method: 'GET',
      serviceType: 'aapi',
      cache,
      isArray: true,
    },
  });

  dedicatedServerResource.resetAllCache = function () {
    dedicatedServerResource.resetCache();
  };

  dedicatedServerResource.resetCache = function () {
    cache.removeAll();
  };

  return dedicatedServerResource;
});
