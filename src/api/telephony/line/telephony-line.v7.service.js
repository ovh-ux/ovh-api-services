angular.module('ovh-api-services').service('OvhApiTelephonyLineV7', (apiv7) => {
  const telephonyLineEndpoint = apiv7('/telephony/:billingAccount/line/:serviceName', {
    billingAccount: '@billingAccount',
    serviceName: '@serviceName',
  });

  return telephonyLineEndpoint;
});
