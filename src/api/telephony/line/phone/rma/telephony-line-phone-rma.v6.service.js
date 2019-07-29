angular.module('ovh-api-services').service('OvhApiTelephonyLinePhoneRMAV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiTelephonyLinePhoneRMAv6Cache');
  const queryCache = $cacheFactory('OvhApiTelephonyLinePhoneRMAV6QueryCache');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.resource;
    },
  };

  return $resource('/telephony/:billingAccount/line/:serviceName/phone/rma/:id', {
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
      isArray: false,
    },
    post: {
      method: 'POST',
      interceptor,
    },
    update: {
      method: 'PUT',
      interceptor,
    },
    cancel: {
      method: 'DELETE',
      interceptor,
    },
  });
});
