angular.module('ovh-api-services').service('OvhApiTelephonyTrunk', $injector => ({
  v6() {
    return $injector.get('OvhApiTelephonyTrunkV6');
  },
  ExternalDisplayedNumber() {
    return $injector.get('OvhApiTelephonyTrunkExternalDisplayedNumber');
  },
}));
