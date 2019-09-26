angular.module('ovh-api-services').service('OvhApiTelephonyCarrierSipSettings', $injector => ({
  v6() {
    return $injector.get('OvhApiTelephonyCarrierSipSettingsV6');
  },
}));
