angular.module('ovh-api-services').service('OvhApiTelephonyCarrierSipSettingsV6', $resource => $resource(
  '/telephony/:billingAccount/carrierSip/:serviceName/settings', {
    billingAccount: '@billingAccount',
    serviceName: '@serviceName',
  }, {
    query: {
      isArray: false,
    },
  },
));
