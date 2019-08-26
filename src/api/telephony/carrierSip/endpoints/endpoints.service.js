angular.module('ovh-api-services').service('OvhApiTelephonyCarrierSipEndpoints', $injector => ({
  v6() {
    return $injector.get('OvhApiTelephonyCarrierSipEndpointsV6');
  },
}));
