angular.module('ovh-api-services').service('OvhApiTelephonyLineOptionsV6', ($resource, OvhApiTelephonyLineOptions) => {
  const interceptor = {
    response(response) {
      OvhApiTelephonyLineOptions.resetCache();
      return response.resource;
    },
  };

  return $resource('/telephony/:billingAccount/line/:serviceName/options', {
    billingAccountId: '@billingAccountId',
    serviceName: '@serviceName',
  }, {
    get: {
      method: 'GET',
      isArray: false,
      cache: OvhApiTelephonyLineOptions.cache,
    },
    update: {
      method: 'PUT',
      isArray: false,
      interceptor,
    },
    availableCodecs: {
      url: '/telephony/:billingAccount/line/:serviceName/options/availableCodecs',
      method: 'GET',
      isArray: true,
      cache: OvhApiTelephonyLineOptions.cache,
    },
    defaultCodecs: {
      url: '/telephony/:billingAccount/line/:serviceName/options/defaultCodecs',
      method: 'GET',
      isArray: false,
      cache: OvhApiTelephonyLineOptions.cache,
      transformResponse(data) {
        // because $resource returns an array of char when response is a simple string
        return {
          codecs: angular.fromJson(data),
        };
      },
    },
  });
});
