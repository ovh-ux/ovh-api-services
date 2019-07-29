angular.module('ovh-api-services').service('OvhApiTelephonyPhonebookV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiTelephonyPhonebookV6');
  const queryCache = $cacheFactory('OvhApiTelephonyPhonebookV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.resource;
    },
  };

  const phonebookResource = $resource('/telephony/:billingAccount/phonebook/:bookKey', {
    billingAccount: '@billingAccount',
    bookKey: '@bookKey',
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
    create: {
      method: 'POST',
      url: '/telephony/:billingAccount/phonebook',
      interceptor,
      transformResponse(data, headers, status) {
        if (status === 200) {
          return { bookKey: angular.fromJson(data) };
        }
        return null;
      },
    },
    update: {
      method: 'PUT',
      interceptor,
    },
    remove: {
      method: 'DELETE',
      interceptor,
    },
    getExport: {
      method: 'GET',
      url: '/telephony/:billingAccount/phonebook/:bookKey/export',
    },
    import: {
      method: 'POST',
      url: '/telephony/:billingAccount/phonebook/:bookKey/import',
      interceptor,
    },
  });

  phonebookResource.resetCache = function () {
    cache.removeAll();
  };

  phonebookResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  phonebookResource.resetAllCache = function () {
    this.resetCache();
    this.resetQueryCache();
  };

  return phonebookResource;
});
