angular.module('ovh-api-services').service('OvhApiTelephonyOvhPabxRecordsV6', ($cacheFactory, $resource) => {
  const cache = $cacheFactory('OvhApiTelephonyOvhPabxRecordsV6');
  const queryCache = $cacheFactory('OvhApiTelephonyOvhPabxRecordsV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.resource;
    },
  };

  const res = $resource('/telephony/:billingAccount/ovhPabx/:serviceName/records/:id', {
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
    remove: {
      method: 'DELETE',
      interceptor,
    },
  });

  res.resetCache = function () {
    cache.removeAll();
  };

  res.resetQueryCache = function () {
    queryCache.removeAll();
  };

  res.resetAllCache = function () {
    this.resetCache();
    this.resetQueryCache();
  };

  return res;
});
