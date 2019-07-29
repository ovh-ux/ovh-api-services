angular.module('ovh-api-services').service('OvhApiMeApiCredentialV6', ($cacheFactory, $resource) => {
  const queryCache = $cacheFactory('OvhApiMeApiCredentialV6Query');
  const cache = $cacheFactory('OvhApiMeApiCredentialV6');
  const batchCache = $cacheFactory('OvhApiMeApiCredentialV6Batch');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.data;
    },
  };

  const resource = $resource('/me/api/credential/:credentialId', {
    credentialId: '@credentialId',
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
      cache: batchCache,
      headers: {
        'X-Ovh-Batch': ',',
      },
    },
    delete: {
      method: 'DELETE',
      interceptor,
    },
    application: {
      method: 'GET',
      url: '/me/api/credential/:credentialId/application',
      cache,
      params: {
        credentialId: '@credentialId',
      },
    },
  });

  resource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  resource.resetCache = function () {
    cache.removeAll();
  };

  resource.resetBatchCache = function () {
    batchCache.removeAll();
  };

  resource.resetAllCache = function () {
    this.resetQueryCache();
    this.resetCache();
    this.resetBatchCache();
  };

  return resource;
});
