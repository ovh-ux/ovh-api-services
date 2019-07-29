angular.module('ovh-api-services').service('OvhApiTelephonyV7', (apiv7) => {
  const telephonyEndpoint = apiv7('/telephony/:billingAccount', {
    billingAccount: '@billingAccount',
  });

  return telephonyEndpoint;
});
