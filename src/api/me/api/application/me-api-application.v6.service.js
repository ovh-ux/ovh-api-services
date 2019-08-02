angular.module('ovh-api-services').service('OvhApiMeApiApplicationV6', ($cacheFactory, $resource) => {
  const queryCache = $cacheFactory('OvhApiMeApiApplicationV6Query');
  const cache = $cacheFactory('OvhApiMeApiApplicationV6');
  const batchCache = $cacheFactory('OvhApiMeApiApplicationV6Batch');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.data;
    },
  };

  const resource = $resource('/me/api/application/:applicationId', {
    applicationId: '@applicationId',
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
      method: 'POST',
      interceptor,
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
