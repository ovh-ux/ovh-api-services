angular.module('ovh-api-services').service('OvhApiTelephonyFaxV7', (apiv7) => {
  const telephonyFaxEndpoint = apiv7('/telephony/:billingAccount/fax/:serviceName', {
    billingAccount: '@billingAccount',
    serviceName: '@serviceName',
  });

  return telephonyFaxEndpoint;
});
