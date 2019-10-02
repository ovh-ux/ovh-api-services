angular.module('ovh-api-services').service('OvhApiTelephonyServiceFaxConsumptionV7', (apiv7) => apiv7('/telephony/:billingAccount/service/:serviceName/faxConsumption/:consumptionId', {
  billingAccount: '@billingAccount',
  serviceName: '@serviceName',
  consumptionId: '@consumptionId',
}));
