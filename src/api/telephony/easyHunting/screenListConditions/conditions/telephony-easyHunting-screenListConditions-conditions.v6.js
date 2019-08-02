angular.module('ovh-api-services').service('OvhApiTelephonyEasyHuntingScreenListConditionsConditionsV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiTelephonyEasyHuntingScreenListConditionsConditionsV6');
  const queryCache = $cacheFactory('OvhApiTelephonyEasyHuntingScreenListConditionsConditionsV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.resource;
    },
  };

  const res = $resource('/telephony/:billingAccount/easyHunting/:serviceName/screenListConditions/conditions/:conditionId', {
    billingAccount: '@billingAccount',
    serviceName: '@serviceName',
    conditionId: '@conditionId',
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
      cache: queryCache,
    },
    create: {
      method: 'POST',
      url: '/telephony/:billingAccount/easyHunting/:serviceName/screenListConditions/conditions',
      interceptor,
    },
    change: {
      method: 'PUT',
      interceptor,
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
