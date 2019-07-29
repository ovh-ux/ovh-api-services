angular.module('ovh-api-services').service('OvhApiTelephonyServiceV7', (apiv7) => {
  const endpoint = apiv7('/telephony/:billingAccount/service/:serviceName', {
    billingAccount: '@billingAccount',
    serviceName: '@serviceName',
  });

  return endpoint;
});
