angular.module('ovh-api-services').service('OvhApiTelephonyEasyHuntingV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiTelephonyEasyHuntingV6');
  const queryCache = $cacheFactory('OvhApiTelephonyEasyHuntingV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.resource;
    },
  };

  const res = $resource('/telephony/:billingAccount/easyHunting/:serviceName', {
    billingAccount: '@billingAccount',
    serviceName: '@serviceName',
  }, {
    query: {
      method: 'GET',
      isArray: true,
      cache,
    },
    get: {
      method: 'GET',
      cache: queryCache,
    },
    change: {
      method: 'PUT',
      interceptor,
    },
    soundUpload: {
      method: 'POST',
      url: '/telephony/:billingAccount/easyHunting/:serviceName/soundUpload',
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
