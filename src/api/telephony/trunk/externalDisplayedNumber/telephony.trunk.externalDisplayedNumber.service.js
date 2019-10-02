angular.module('ovh-api-services').service('OvhApiTelephonyTrunkExternalDisplayedNumber', ($injector) => ({
  v6() {
    return $injector.get('OvhApiTelephonyTrunkExternalDisplayedNumberV6');
  },
}));
