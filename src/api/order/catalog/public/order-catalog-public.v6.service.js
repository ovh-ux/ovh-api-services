angular.module('ovh-api-services').service('OvhApiOrderCatalogPublicV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiOrderCatalogPublicV6');

  const resource = $resource('/order/catalog/public/:productName', {
    productName: '@productName',
  }, {
    get: { method: 'GET', cache },
  });

  resource.resetCache = function () {
    cache.removeAll();
  };

  return resource;
});
