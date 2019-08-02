angular.module('ovh-api-services').service('OvhApiTelephonyTimeConditionAapi', ($resource, OvhApiTelephonyTimeCondition) => $resource('/telephony/:billingAccount/timeCondition', {
  billingAccount: '@billingAccount',
  serviceName: '@serviceName',
}, {
  getConditions: {
    url: '/telephony/:billingAccount/timeCondition/:serviceName/condition',
    method: 'GET',
    serviceType: 'aapi',
    cache: OvhApiTelephonyTimeCondition.cache,
    isArray: true,
  },
}));
