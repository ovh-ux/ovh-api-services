angular.module('ovh-api-services').service('OvhApiTelephonyServicePreviousVoiceConsumptionV6', ($resource) => $resource('/telephony/:billingAccount/service/:serviceName/previousVoiceConsumption/:consumptionId', {
  billingAccount: '@billingAccount',
  serviceName: '@serviceName',
  consumptionId: '@consumptionId',
}));
