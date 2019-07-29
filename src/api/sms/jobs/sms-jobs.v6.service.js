angular.module('ovh-api-services').service('OvhApiSmsJobsV6', ($cacheFactory, $resource) => {
  const cache = $cacheFactory('OvhApiSmsJobsV6');
  const queryCache = $cacheFactory('OvhApiSmsJobsV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.resource;
    },
  };

  const jobResource = $resource('/sms/:serviceName/jobs/:id', {
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
    delete: {
      method: 'DELETE',
      interceptor,
    },
    send: {
      method: 'POST',
      isArray: false,
      interceptor,
    },
    getPtts: {
      method: 'GET',
      url: '/sms/ptts',
      cache,
    },
  });

  jobResource.resetCache = function () {
    cache.removeAll();
  };

  jobResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  jobResource.resetAllCache = function () {
    this.resetCache();
    this.resetQueryCache();
  };

  return jobResource;
});
