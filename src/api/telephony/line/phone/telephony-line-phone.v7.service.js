angular.module('ovh-api-services').service('OvhApiTelephonyLinePhoneV7', (apiv7) => {
  const telephonyLinePhoneEndpoint = apiv7('/telephony/:billingAccount/line/:serviceName/phone', {
    billingAccount: '@billingAccount',
    serviceName: '@serviceName',
  });

  return telephonyLinePhoneEndpoint;
});
