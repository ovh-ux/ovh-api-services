angular.module('ovh-api-services').service('OvhApiOrderCatalogFormattedV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiOrderCatalogFormattedV6');

  const resource = $resource('/order/catalog/formatted/:catalogName', {
    catalogName: '@catalogName',
  }, {
    get: { method: 'GET', cache },
    query: { method: 'GET', isArray: true, cache },
  });

  resource.resetCache = function () {
    cache.removeAll();
  };

  return resource;
});
