angular.module('ovh-api-services').service('OvhApiTelephonyLineClick2Call', $injector => ({
  v6() {
    return $injector.get('OvhApiTelephonyLineClick2CallV6');
  },
  User() {
    return $injector.get('OvhApiTelephonyLineClick2CallUser');
  },
  Aapi: angular.noop,
}));
