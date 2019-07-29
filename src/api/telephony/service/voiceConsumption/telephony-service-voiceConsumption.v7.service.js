angular.module('ovh-api-services').service('OvhApiTelephonyServiceVoiceConsumptionV7', apiv7 => apiv7('/telephony/:billingAccount/service/:serviceName/voiceConsumption/:consumptionId', {
  billingAccount: '@billingAccount',
  serviceName: '@serviceName',
  consumptionId: '@consumptionId',
}));
