angular.module('ovh-api-services').service('OvhApiTelephonyCarrierSipEndpointsV6', $resource => $resource(
  '/telephony/:billingAccount/carrierSip/:serviceName/endpoints/:id', {
    billingAccount: '@billingAccount',
    serviceName: '@serviceName',
    id: '@id',
  },
));
