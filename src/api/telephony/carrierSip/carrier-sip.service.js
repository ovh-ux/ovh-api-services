angular.module('ovh-api-services').service('OvhApiTelephonyCarrierSip', $injector => ({
  v6() {
    return $injector.get('OvhApiTelephonyCarrierSipV6');
  },
  Cdrs() {
    return $injector.get('OvhApiTelephonyCarrierSipCdrs');
  },
  ClusterDetails() {
    return $injector.get('OvhApiTelephonyCarrierSipClusterDetails');
  },
  Endpoints() {
    return $injector.get('OvhApiTelephonyCarrierSipEndpoints');
  },
  Settings() {
    return $injector.get('OvhApiTelephonyCarrierSipSettings');
  },
}));
