angular.module('ovh-api-services').service('OvhApiTelephonyLineClick2CallUserV6', ($resource, $cacheFactory, OvhApiTelephonyLineClick2CallUser) => {
  const interceptor = {
    response(response) {
      OvhApiTelephonyLineClick2CallUser.cache.remove(response.config.url);
      return response.data;
    },
  };

  return $resource('/telephony/:billingAccount/line/:serviceName/click2CallUser/:id', {
    billingAccount: '@billingAccount',
    serviceName: '@serviceName',
    id: '@id',
  }, {
    query: {
      method: 'GET',
      isArray: true,
      cache: OvhApiTelephonyLineClick2CallUser.cache,
    },
    post: {
      method: 'POST',
      interceptor,
    },
    get: {
      method: 'GET',
      cache: OvhApiTelephonyLineClick2CallUser.cache,
      isArray: false,
    },
    delete: {
      method: 'DELETE',
      interceptor,
    },
    changePassword: {
      method: 'POST',
      url: '/telephony/:billingAccount/line/:serviceName/click2CallUser/:id/changePassword',
      params: {
        billingAccount: '@billingAccount',
        serviceName: '@serviceName',
        id: '@id',
      },
      interceptor,
    },
    click2Call: {
      method: 'POST',
      url: '/telephony/:billingAccount/line/:serviceName/click2CallUser/:id/click2Call',
      params: {
        billingAccount: '@billingAccount',
        serviceName: '@serviceName',
        id: '@id',
      },
      interceptor,
    },
  });
});
