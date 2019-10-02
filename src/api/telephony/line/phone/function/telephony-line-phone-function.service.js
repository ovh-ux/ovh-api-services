angular.module('ovh-api-services').service('OvhApiTelephonyLineFunctionPhone', ($injector) => ({
  v6() {
    return $injector.get('OvhApiTelephonyLinePhoneFunctionV6');
  },
  v7() {
    return $injector.get('OvhApiTelephonyLinePhoneFunctionV7');
  },
  Aapi: angular.noop,
}));
