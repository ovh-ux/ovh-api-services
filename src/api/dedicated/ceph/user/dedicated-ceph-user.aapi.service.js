angular.module('ovh-api-services').service('OvhApiDedicatedCephUserAapi', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiDedicatedCephUserAapi');

  const resource = $resource('/dedicated/ceph/:serviceName/user', {
    serviceName: '@serviceName',
  }, {
    users: {
      url: '/dedicated/ceph/:serviceName/user',
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
