angular.module('ovh-api-services').service('OvhApiTelephonyScreenListsV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiTelephonyScreenListsV6');
  const queryCache = $cacheFactory('OvhApiTelephonyScreenListsV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.resource;
    },
  };

  const screenListResource = $resource('/telephony/:billingAccount/screen/:serviceName/screenLists/:id', {
    billingAccount: '@billingAccount',
    serviceName: '@serviceName',
    id: '@id',
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
    create: {
      method: 'POST',
      interceptor,
    },
    remove: {
      method: 'DELETE',
      interceptor,
    },
  });

  screenListResource.resetAllCache = function () {
    cache.removeAll();
    queryCache.removeAll();
  };

  return screenListResource;
});
