angular.module('ovh-api-services').service('OvhApiTelephonyScreenV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiTelephonyScreenV6');
  const queryCache = $cacheFactory('OvhApiTelephonyScreenV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.resource;
    },
  };

  const screenResource = $resource('/telephony/:billingAccount/screen/:serviceName', {
    billingAccount: '@billingAccount',
    serviceName: '@serviceName',
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
    getBatch: {
      method: 'GET',
      isArray: true,
      headers: {
        'X-Ovh-Batch': ',',
      },
      cache,
    },
    change: {
      method: 'PUT',
      interceptor,
    },
  });

  screenResource.resetAllCache = function () {
    cache.removeAll();
    queryCache.removeAll();
  };

  return screenResource;
});
