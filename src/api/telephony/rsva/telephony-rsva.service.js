angular.module('ovh-api-services').service('OvhApiTelephonyRsva', $injector => ({
  v6() {
    return $injector.get('OvhApiTelephonyRsvaV6');
  },
}));
