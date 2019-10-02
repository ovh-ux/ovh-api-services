angular.module('ovh-api-services').service('OvhApiTelephonyCarrierSipV6', ($resource) => $resource(
  '/telephony/:billingAccount/carrierSip/:serviceName', {
    billingAccount: '@billingAccount',
    serviceName: '@serviceName',
  },
));
