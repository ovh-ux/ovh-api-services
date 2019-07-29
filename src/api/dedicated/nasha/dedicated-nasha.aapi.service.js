angular.module('ovh-api-services').service('OvhApiDedicatedNashaAapi', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiDedicatedNashaAapi');

  const resource = $resource('/dedicated/nasha/:serviceName', {
    serviceName: '@serviceName',
  }, {
    get: {
      url: '/dedicated/nasha/:serviceName',
      method: 'GET',
      cache,
      serviceType: 'aapi',
      isArray: false,
    },
    partitions: {
      url: '/dedicated/nasha/:serviceName/partitions',
      method: 'GET',
      cache,
      serviceType: 'aapi',
      isArray: true,
    },
  });

  resource.resetAllCache = function () {
    resource.resetCache();
  };

  resource.resetCache = function () {
    cache.removeAll();
  };

  return resource;
});
