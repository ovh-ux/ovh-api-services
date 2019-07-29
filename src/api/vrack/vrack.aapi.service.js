angular.module('ovh-api-services').service('OvhApiVrackAapi', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiVrackAapi');

  const vrackResource = $resource('/vrack/:serviceName', {
    serviceName: '@serviceName',
  }, {
    query: {
      url: '/vracks',
      method: 'GET',
      cache,
      serviceType: 'aapi',
      isArray: true,
    },
    allowedServices: {
      url: '/vrack/:serviceName/allowedServices',
      method: 'GET',
      cache,
      serviceType: 'aapi',
      isArray: false,
    },
    services: {
      url: '/vrack/:serviceName/services',
      method: 'GET',
      cache,
      serviceType: 'aapi',
      isArray: false,
    },
  });

  vrackResource.resetAllCache = function () {
    vrackResource.resetCache();
  };

  vrackResource.resetCache = function () {
    cache.removeAll();
  };

  return vrackResource;
});
