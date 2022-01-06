angular.module('ovh-api-services').service('OvhApiTelephonyLineFunctionPhone', ($injector) => ({
  v6() {
    return $injector.get('OvhApiTelephonyLinePhoneFunctionV6');
  },
  Aapi: angular.noop,
}));
