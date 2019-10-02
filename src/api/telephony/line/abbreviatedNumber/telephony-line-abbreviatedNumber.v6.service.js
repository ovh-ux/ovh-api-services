
angular.module('ovh-api-services').service('OvhApiTelephonyLineAbbreviatedNumberV6', ($resource, OvhApiTelephonyLineAbbreviatedNumber) => {
  const interceptor = {
    response(response) {
      OvhApiTelephonyLineAbbreviatedNumber.resetCache();
      return response.resource;
    },
  };

  return $resource('/telephony/:billingAccount/line/:serviceName/abbreviatedNumber', {
    billingAccount: '@billingAccount',
    serviceName: '@serviceName',
  }, {
    query: {
      method: 'GET',
      isArray: true,
      url: '/telephony/:billingAccount/line/:serviceName/abbreviatedNumber',
      cache: OvhApiTelephonyLineAbbreviatedNumber.cache,
    },
    detail: {
      method: 'GET',
      isArray: false,
      url: '/telephony/:billingAccount/line/:serviceName/abbreviatedNumber/:abbreviatedNumber',
      cache: OvhApiTelephonyLineAbbreviatedNumber.cache,
    },
    remove: {
      method: 'DELETE',
      isArray: false,
      url: '/telephony/:billingAccount/line/:serviceName/abbreviatedNumber/:abbreviatedNumber',
      interceptor,
    },
    update: {
      method: 'PUT',
      isArray: false,
      url: '/telephony/:billingAccount/line/:serviceName/abbreviatedNumber/:abbreviatedNumber',
      interceptor,
    },
    insert: {
      method: 'POST',
      isArray: false,
      url: '/telephony/:billingAccount/line/:serviceName/abbreviatedNumber/:abbreviatedNumber',
      interceptor,
    },
  });
});
