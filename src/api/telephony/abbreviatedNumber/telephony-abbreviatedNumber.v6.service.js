

angular.module('ovh-api-services').service('OvhApiTelephonyAbbreviatedNumberV6', ($resource, OvhApiTelephonyAbbreviatedNumber) => {
  const interceptor = {
    response(response) {
      OvhApiTelephonyAbbreviatedNumber.resetCache();
      return response.resource;
    },
  };

  return $resource('/telephony/:billingAccount/abbreviatedNumber', {
    billingAccount: '@billingAccount',
  }, {
    query: {
      method: 'GET',
      isArray: true,
      url: '/telephony/:billingAccount/abbreviatedNumber',
      cache: OvhApiTelephonyAbbreviatedNumber.cache,
    },
    detail: {
      method: 'GET',
      isArray: false,
      url: '/telephony/:billingAccount/abbreviatedNumber/:abbreviatedNumber',
      cache: OvhApiTelephonyAbbreviatedNumber.cache,
    },
    remove: {
      method: 'DELETE',
      isArray: false,
      url: '/telephony/:billingAccount/abbreviatedNumber/:abbreviatedNumber',
      interceptor,
    },
    update: {
      method: 'PUT',
      isArray: false,
      url: '/telephony/:billingAccount/abbreviatedNumber/:abbreviatedNumber',
      interceptor,
    },
    insert: {
      method: 'POST',
      isArray: false,
      url: '/telephony/:billingAccount/abbreviatedNumber/:abbreviatedNumber',
      interceptor,
    },
  });
});
