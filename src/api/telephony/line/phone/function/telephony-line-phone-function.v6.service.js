angular.module('ovh-api-services').service('OvhApiTelephonyLinePhoneFunctionV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiTelephonyLinePhoneFunctionV6');

  /**
     * uncomment when post
    * */
  const interceptor = {
    response(response) {
      cache.removeAll();
      return response.data;
    },
  };

  return $resource('/telephony/:billingAccount/line/:serviceName/phone/functionKey/:keyNum', {
    billingAccount: '@billingAccount',
    serviceName: '@serviceName',
    keyNum: '@keyNum',
  }, {
    query: {
      method: 'GET',
      isArray: true,
      cache,
    },
    get: {
      method: 'GET',
      cache,
    },
    save: {
      method: 'PUT',
      interceptor,
    },
    availableFunctions: {
      url: '/telephony/:billingAccount/line/:serviceName/phone/functionKey/:keyNum/availableFunction',
      params: {
        billingAccount: '@billingAccount',
        serviceName: '@serviceName',
        keyNum: '@keyNum',
      },
      method: 'GET',
      isArray: true,
      cache,
    },
  });
});
