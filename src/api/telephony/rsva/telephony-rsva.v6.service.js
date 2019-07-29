angular.module('ovh-api-services').service('OvhApiTelephonyRsvaV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiTelephonyRsvaV6');

  const interceptor = function (response) {
    cache.removeAll();
    return response.data;
  };

  const ressource = $resource('/telephony/:billingAccount/rsva/:serviceName', {
    billingAccount: '@billingAccount',
    serviceName: '@serviceName',
  }, {
    query: {
      method: 'GET',
      cache,
      isArray: true,
    },
    edit: {
      method: 'PUT',
      interceptor,
    },
    getAllowedRateCodes: {
      method: 'GET',
      url: '/telephony/:billingAccount/rsva/:serviceName/allowedRateCodes',
      cache,
      isArray: true,
    },
    getCurrentRateCode: {
      method: 'GET',
      url: '/telephony/:billingAccount/rsva/:serviceName/currentRateCode',
      cache,
    },
    getScheduledRateCode: {
      method: 'GET',
      url: '/telephony/:billingAccount/rsva/:serviceName/scheduledRateCode',
      cache,
    },
    scheduleRateCode: {
      method: 'POST',
      url: '/telephony/:billingAccount/rsva/:serviceName/scheduleRateCode',
      interceptor,
    },
    cancelScheduledRateCode: {
      method: 'POST',
      url: '/telephony/:billingAccount/rsva/:serviceName/cancelScheduledRateCode',
      interceptor,
    },
  });

  ressource.resetCache = function () {
    cache.removeAll();
  };

  return ressource;
});
