angular.module('ovh-api-services').service('OvhApiTelephonyCarrierSipClusterDetailsV6', $resource => $resource('/telephony/:billingAccount/carrierSip/:serviceName/clusterDetails', {
  billingAccount: '@billingAccount',
  serviceName: '@serviceName',
}));
