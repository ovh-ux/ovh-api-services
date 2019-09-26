angular.module('ovh-api-services').service('OvhApiTelephonyCarrierSip', $injector => ({
  v6() {
    return $injector.get('OvhApiTelephonyCarrierSipV6');
  },
  Cdrs() {
    return $injector.get('OvhApiTelephonyCarrierSipCdrs');
  },
  Endpoints() {
    return $injector.get('OvhApiTelephonyCarrierSipEndpoints');
  },
  Settings() {
    return $injector.get('OvhApiTelephonyCarrierSipSettings');
  },
}));
