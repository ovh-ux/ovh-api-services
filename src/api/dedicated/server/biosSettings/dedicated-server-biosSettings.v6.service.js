angular.module('ovh-api-services').service('OvhApiDedicatedServerBiosSettingsV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiDedicatedServerBiosSettingsV6');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);

      return response.resource;
    },
  };

  const dedicatedServerResource = $resource('/dedicated/server/:serverName/biosSettings', {
    serverName: '@serverName',
  }, {
    get: { method: 'GET', cache },
    getFeature: {
      url: '/dedicated/server/:serverName/biosSettings/:featureName',
      method: 'GET',
      featureName: '@featureName',
      cache,
    },
    configureFeature: {
      url: '/dedicated/server/:serverName/biosSettings/:featureName/configure',
      method: 'POST',
      featureName: '@featureName',
      interceptor,
    },
  });

  dedicatedServerResource.resetAllCache = function resetAllCache() {
    dedicatedServerResource.resetOtherCache();
  };

  dedicatedServerResource.resetOtherCache = function resetAllCache() {
    cache.removeAll();
  };

  return dedicatedServerResource;
});
