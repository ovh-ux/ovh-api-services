angular.module('ovh-api-services').service('OvhApiDbaasOrderV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiDbaasOrderV6');
  const queryCache = $cacheFactory('OvhApiDbaasOrderV6Query');

  const orderResource = $resource('/order/upgrade/logs/:serviceName', {
    serviceName: '@serviceName',
  }, {
    query: { method: 'GET', cache: queryCache, isArray: true },
    get: { method: 'GET', cache },
    saveOrder: {
      method: 'POST',
      cache,
      url: '/order/upgrade/logs/:serviceName/:planCode',
    },
    getCatalog: {
      method: 'GET',
      cache,
      url: '/order/catalog/formatted/logs',
    },
  });

  orderResource.resetAllCache = function () {
    orderResource.resetCache();
    orderResource.resetQueryCache();
  };

  orderResource.resetCache = function () {
    cache.removeAll();
  };

  orderResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return orderResource;
});
