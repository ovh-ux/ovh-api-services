angular.module('ovh-api-services').service('OvhApiSmsVirtualNumbersV6', ($cacheFactory, $resource) => {
  const cache = $cacheFactory('OvhApiSmsVirtualNumbersV6');
  const queryCache = $cacheFactory('OvhApiSmsVirtualNumbersV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.resource;
    },
  };

  const res = $resource('/sms/:serviceName/virtualNumbers/:number', {
    serviceName: '@serviceName',
    number: '@number',
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
    queryVirtualNumbers: {
      method: 'GET',
      url: '/sms/virtualNumbers',
      isArray: true,
      cache,
    },
    getVirtualNumbers: {
      method: 'GET',
      url: '/sms/virtualNumbers/:number',
      params: {
        number: '@number',
      },
      cache,
    },
    getVirtualNumbersServiceInfos: {
      method: 'GET',
      url: '/sms/virtualNumbers/:number/serviceInfos',
      params: {
        number: '@number',
      },
      cache,
    },
    updateVirtualNumbersServiceInfos: {
      method: 'PUT',
      url: '/sms/virtualNumbers/:number/serviceInfos',
      params: {
        number: '@number',
      },
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
