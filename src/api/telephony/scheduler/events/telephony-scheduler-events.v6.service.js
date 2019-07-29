angular.module('ovh-api-services').service('OvhApiTelephonySchedulerEventsV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiTelephonySchedulerEventsV6');
  const queryCache = $cacheFactory('OvhApiTelephonySchedulerEventsV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.resource;
    },
  };

  const schedulerEventsResource = $resource('/telephony/:billingAccount/scheduler/:serviceName/events/:uid', {
    billingAccount: '@billingAccount',
    serviceName: '@serviceName',
    uid: '@uid',
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
    create: {
      url: '/telephony/:billingAccount/scheduler/:serviceName/events',
      params: {
        billingAccount: '@billingAccount',
        serviceName: '@serviceName',
      },
      method: 'POST',
      interceptor,
    },
    save: {
      method: 'PUT',
      interceptor,
    },
    remove: {
      method: 'DELETE',
      interceptor,
    },
  });

  schedulerEventsResource.resetCache = function () {
    cache.removeAll();
  };

  schedulerEventsResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  schedulerEventsResource.resetAllCache = function () {
    this.resetCache();
    this.resetQueryCache();
  };

  return schedulerEventsResource;
});
