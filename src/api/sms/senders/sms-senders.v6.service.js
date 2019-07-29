angular.module('ovh-api-services').service('OvhApiSmsSendersV6', ($cacheFactory, $resource) => {
  const cache = $cacheFactory('OvhApiSmsSendersV6');
  const queryCache = $cacheFactory('OvhApiSmsSendersV6Query');
  const batchCache = $cacheFactory('OvhApiSmsSendersv6Batch');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      batchCache.remove(response.config.url);
      return response.resource;
    },
  };

  const sendersResource = $resource('/sms/:serviceName/senders/:sender', {
    serviceName: '@serviceName',
    sender: '@sender',
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
        'X-Ovh-Batch': '|',
      },
      cache: batchCache,
    },
    edit: {
      method: 'PUT',
      interceptor,
    },
    delete: {
      method: 'DELETE',
      interceptor,
    },
    create: {
      method: 'POST',
      url: '/sms/:serviceName/senders',
      interceptor,
    },
  });

  sendersResource.resetCache = function () {
    cache.removeAll();
  };

  sendersResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  sendersResource.resetBatchCache = function () {
    batchCache.removeAll();
  };

  sendersResource.resetAllCache = function () {
    this.resetCache();
    this.resetQueryCache();
    this.resetBatchCache();
  };

  return sendersResource;
});
