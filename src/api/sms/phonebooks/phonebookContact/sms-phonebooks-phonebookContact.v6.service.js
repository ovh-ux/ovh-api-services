angular.module('ovh-api-services').service('OvhApiSmsPhonebooksPhonebookContactV6', ($cacheFactory, $resource) => {
  const cache = $cacheFactory('OvhApiSmsPhonebooksPhonebookContactV6');
  const queryCache = $cacheFactory('OvhApiSmsPhonebooksPhonebookContactV6Query');
  const batchCache = $cacheFactory('OvhApiSmsPhonebooksPhonebookContactv6Batch');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      batchCache.remove(response.config.url);
      return response.resource;
    },
  };

  const phonebookContactResource = $resource('/sms/:serviceName/phonebooks/:bookKey/phonebookContact/:id', {
    serviceName: '@serviceName',
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
      url: '/sms/:serviceName/phonebooks/:bookKey/phonebookContact',
      interceptor,
    },
    update: {
      method: 'PUT',
      interceptor,
    },
    delete: {
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
