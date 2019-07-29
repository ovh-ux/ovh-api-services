angular.module('ovh-api-services').service('OvhApiTelephonyNumberV7', (apiv7) => {
  const telephonyNumberEndpoint = apiv7('/telephony/:billingAccount/number/:serviceName', {
    billingAccount: '@billingAccount',
    serviceName: '@serviceName',
  });

  return telephonyNumberEndpoint;
});
