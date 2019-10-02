angular.module('ovh-api-services').service('OvhApiTelephonyEasyHuntingTimeConditionsV6', ($resource) => $resource('/telephony/:billingAccount/easyHunting/:serviceName/timeConditions', {
  billingAccount: '@billingAccount',
  serviceName: '@serviceName',
}, {
  save: {
    method: 'PUT',
  },
}));
