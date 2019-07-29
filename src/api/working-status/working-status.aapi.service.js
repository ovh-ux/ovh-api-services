angular.module('ovh-api-services').service('OvhApiWorkingStatusAapi', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiWorkingStatusAapi');

  const workingStatusResource = $resource('/working-status/:product', {
    product: '@product',
  }, {
    get: {
      method: 'GET',
      url: '/working-status/:product',
      serviceType: 'aapi',
      cache,
      isArray: true,
    },
  });

  workingStatusResource.resetAllCache = function () {
    workingStatusResource.resetCache();
  };

  workingStatusResource.resetCache = function () {
    cache.removeAll();
  };

  return workingStatusResource;
});
