angular.module('ovh-api-services').service('OvhApiXdslSpareV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiXdslSpareV6');
  const queryCache = $cacheFactory('OvhApiXdslSpareV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.resource;
    },
  };

  const spareResource = $resource('/xdsl/spare', {
    spare: '@spare',
  }, {
    query: {
      method: 'GET',
      isArray: true,
      cache: queryCache,
    },
    get: {
      method: 'GET',
      cache,
    },
    getSpare: {
      method: 'GET',
      url: '/xdsl/spare/:spare',
    },
    replaceSpare: {
      method: 'POST',
      url: '/xdsl/spare/:spare/replace',
      interceptor,
    },
    returnMerchandise: {
      method: 'POST',
      url: 'xdsl/spare/:spare/returnMerchandise',
      interceptor,
    },
    deleteSpare: {
      method: 'DELETE',
      url: '/xdsl/spare/:spare',
      interceptor,
    },
    getBrands: {
      method: 'GET',
      url: '/xdsl/spare/brands',
    },
    getNewSpare: {
      method: 'GET',
      url: '/order/xdsl/spare/new',
    },
    orderNewSpare: {
      method: 'POST',
      url: '/order/xdsl/spare/new',
    },
  });

  spareResource.resetAllCache = function () {
    cache.removeAll();
    queryCache.removeAll();
  };

  return spareResource;
});
