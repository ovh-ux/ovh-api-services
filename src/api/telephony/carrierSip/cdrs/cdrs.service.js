angular.module('ovh-api-services').service('OvhApiTelephonyCarrierSipCdrs', ($injector) => ({
  v6() {
    return $injector.get('OvhApiTelephonyCarrierSipCdrsV6');
  },
}));
