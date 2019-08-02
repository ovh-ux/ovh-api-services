angular.module('ovh-api-services').service('OvhApiTelephonyPhonebookPhonebookContactV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiTelephonyPhonebookPhonebookContactV6');
  const queryCache = $cacheFactory('OvhApiTelephonyPhonebookPhonebookContactV6Query');
  const batchCache = $cacheFactory('OvhApiTelephonyPhonebookPhonebookContactv6Batch');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      batchCache.remove(response.config.url);
      return response.resource;
    },
  };

  const phonebookContactResource = $resource('/telephony/:billingAccount/phonebook/:bookKey/phonebookContact/:id', {
    billingAccount: '@billingAccount',
    bookKey: '@bookKey',
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
      cache: batchCache,
    },
    create: {
      method: 'POST',
      url: '/telephony/:billingAccount/phonebook/:bookKey/phonebookContact',
      interceptor,
    },
    update: {
      method: 'PUT',
      interceptor,
    },
    remove: {
      method: 'DELETE',
      interceptor,
    },
  });

  phonebookContactResource.resetCache = function () {
    cache.removeAll();
  };

  phonebookContactResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  phonebookContactResource.resetBatchCache = function () {
    batchCache.removeAll();
  };

  phonebookContactResource.resetAllCache = function () {
    this.resetCache();
    this.resetQueryCache();
    this.resetBatchCache();
  };

  return phonebookContactResource;
});
