angular.module('ovh-api-services').service('OvhApiTelephonyLineAbbreviatedNumberAapi', ($resource, OvhApiTelephonyLineAbbreviatedNumber) => $resource('/telephony/:billingAccount/line/:serviceName/abbreviatedNumber', {
  billingAccount: '@billingAccount',
  serviceName: '@serviceName',
}, {
  query: {
    method: 'GET',
    url: '/telephony/:billingAccount/line/:serviceName/abbreviatedNumber',
    serviceType: 'aapi',
    isArray: true,
    cache: OvhApiTelephonyLineAbbreviatedNumber.cache,
  },
}));
