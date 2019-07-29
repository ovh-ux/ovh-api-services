angular.module('ovh-api-services').service('OvhApiTelephonyOvhPabxHuntingV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiTelephonyOvhPabxHuntingV6');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      return response.resource;
    },
  };

  const res = $resource('/telephony/:billingAccount/ovhPabx/:serviceName/hunting', {
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
