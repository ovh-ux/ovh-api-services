angular.module('ovh-api-services').service('OvhApiTelephonyCarrierSipClusterDetails', $injector => ({
  v6() {
    return $injector.get('OvhApiTelephonyCarrierSipClusterDetailsV6');
  },
}));
