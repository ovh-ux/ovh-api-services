angular.module('ovh-api-services').service('OvhApiTelephonyCarrierSipIceberg', (iceberg) => iceberg(
  '/telephony/:billingAccount/carrierSip/:serviceName', {
    billingAccount: '@billingAccount',
    serviceName: '@serviceName',
  },
));
