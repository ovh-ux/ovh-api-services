angular.module('ovh-api-services').service('OvhApiTelephonySchedulerV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiTelephonySchedulerV6');
  const queryCache = $cacheFactory('OvhApiTelephonySchedulerV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.resource;
    },
  };

  const schedulerResource = $resource('/telephony/:billingAccount/scheduler/:serviceName', {
    billingAccount: '@billingAccount',
    serviceName: '@serviceName',
  }, {
    get: {
      method: 'GET',
      isArray: false,
      cache,
    },
    query: {
      method: 'GET',
      isArray: true,
      cache: queryCache,
    },
    getBatch: {
      method: 'GET',
      isArray: true,
      headers: {
        'X-Ovh-Batch': ',',
      },
      cache: queryCache,
    },
    save: {
      method: 'PUT',
      interceptor,
    },
    importIcsCalendar: {
      method: 'POST',
      url: '/telephony/:billingAccount/scheduler/:serviceName/importIcsCalendar',
      interceptor,
    },
  });

  schedulerResource.resetCache = function () {
    cache.removeAll();
  };

  schedulerResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  schedulerResource.resetAllCache = function () {
    this.resetCache();
    this.resetQueryCache();
  };

  return schedulerResource;
});
