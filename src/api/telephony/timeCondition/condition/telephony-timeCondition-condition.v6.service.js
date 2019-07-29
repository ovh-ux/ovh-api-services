angular.module('ovh-api-services').service('OvhApiTelephonyTimeConditionConditionV6', $resource => $resource('/telephony/:billingAccount/timeCondition/:serviceName/condition/:id', {
  billingAccount: '@billingAccount',
  serviceName: '@serviceName',
  id: '@id',
}, {
  getBatch: {
    method: 'GET',
    isArray: true,
    headers: {
      'X-Ovh-Batch': ',',
    },
  },
  save: {
    method: 'PUT',
  },
  create: {
    method: 'POST',
  },
}));
