angular.module('ovh-api-services').service('OvhApiTelephonyLinePhoneFunctionV7', (apiv7) => {
  const telephonyLinePhoneFunctionEndpoint = apiv7('/telephony/:billingAccount/line/:serviceName/phone/functionKey/:keyNum', {
    billingAccount: '@billingAccount',
    serviceName: '@serviceName',
    keyNum: '@keyNum',
  });

  return telephonyLinePhoneFunctionEndpoint;
});
