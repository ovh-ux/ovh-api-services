angular.module('ovh-api-services').service('OvhApiTelephonyCarrierSipCdrsV6', $resource => $resource(
  '/telephony/:billingAccount/carrierSip/:serviceName/cdrs', {
    billingAccount: '@billingAccount',
    serviceName: '@serviceName',
  },
));
