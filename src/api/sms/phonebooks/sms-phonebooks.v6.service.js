angular.module('ovh-api-services').service('OvhApiSmsPhonebooksV6', ($cacheFactory, $resource) => {
  const cache = $cacheFactory('OvhApiSmsPhonebooksV6');
  const queryCache = $cacheFactory('OvhApiSmsPhonebooksV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.resource;
    },
  };

  const phonebooksResource = $resource('/sms/:serviceName/phonebooks/:bookKey', {
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
      url: '/sms/:serviceName/phonebooks',
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
    delete: {
      method: 'DELETE',
      interceptor,
    },
    getExport: {
      method: 'GET',
      url: '/sms/:serviceName/phonebooks/:bookKey/export',
    },
    import: {
      method: 'POST',
      url: '/sms/:serviceName/phonebooks/:bookKey/import',
      interceptor,
    },
  });

  phonebooksResource.resetCache = function () {
    cache.removeAll();
  };

  phonebooksResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  phonebooksResource.resetAllCache = function () {
    this.resetCache();
    this.resetQueryCache();
  };

  return phonebooksResource;
});
