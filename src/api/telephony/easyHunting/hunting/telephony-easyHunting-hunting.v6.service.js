angular.module('ovh-api-services').service('OvhApiTelephonyEasyHuntingHuntingV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiTelephonyEasyHuntingHuntingV6');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      return response.resource;
    },
  };

  const res = $resource('/telephony/:billingAccount/easyHunting/:serviceName/hunting', {
    billingAccount: '@billingAccount',
    serviceName: '@serviceName',
  }, {
    get: {
      method: 'GET',
      cache,
    },
    change: {
      method: 'PUT',
      interceptor,
    },
  });

  res.resetCache = function () {
    cache.removeAll();
  };

  return res;
});
