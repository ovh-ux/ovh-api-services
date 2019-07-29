angular.module('ovh-api-services').service('OvhApiTelephonySpareV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiTelephonySpareV6');
  const queryCache = $cacheFactory('OvhApiTelephonySpareV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.resource;
    },
  };

  const spareResource = $resource('/telephony/spare', {
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
      url: '/telephony/spare/:spare',
    },
    replaceSpare: {
      method: 'POST',
      url: '/telephony/spare/:spare/replace',
      interceptor,
    },
    deleteSpare: {
      method: 'DELETE',
      url: '/telephony/spare/:spare',
      interceptor,
    },
    getBrands: {
      method: 'GET',
      url: '/telephony/spare/brands',
    },
    getNewSpare: {
      method: 'GET',
      url: '/order/telephony/spare/new',
    },
    orderNewSpare: {
      method: 'POST',
      url: '/order/telephony/spare/new',
    },
  });

  spareResource.resetAllCache = function () {
    cache.removeAll();
    queryCache.removeAll();
  };

  return spareResource;
});
