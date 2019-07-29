angular.module('ovh-api-services').service('OvhApiTelephonyLinePhonePhonebookV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiTelephonyLinePhonePhonebookV6');
  const queryCache = $cacheFactory('OvhApiTelephonyLinePhonePhonebookV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.resource;
    },
  };

  const phonebookResource = $resource('/telephony/:billingAccount/line/:serviceName/phone/phonebook/:bookKey', {
    billingAccount: '@billingAccount',
    serviceName: '@serviceName',
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
      url: '/telephony/:billingAccount/line/:serviceName/phone/phonebook',
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
      url: '/telephony/:billingAccount/line/:serviceName/phone/phonebook/:bookKey/export',
    },
    import: {
      method: 'POST',
      url: '/telephony/:billingAccount/line/:serviceName/phone/phonebook/:bookKey/import',
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
