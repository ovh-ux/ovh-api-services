angular.module('ovh-api-services').service('OvhApiProductsAapi', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiProductsAapi');

  const productsResource = $resource('/products', {
  }, {
    get: {
      method: 'GET',
      isArray: false,
      universe: '@universe',
      serviceType: 'aapi',
    },
  });

  productsResource.resetAllCache = function () {
    productsResource.resetCache();
  };

  productsResource.resetCache = function () {
    cache.removeAll();
  };

  return productsResource;
});
