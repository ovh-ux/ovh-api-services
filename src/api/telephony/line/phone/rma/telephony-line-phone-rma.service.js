angular.module('ovh-api-services').service('OvhApiTelephonyLinePhoneRMA', ($injector) => ({
  v6() {
    return $injector.get('OvhApiTelephonyLinePhoneRMAV6');
  },
  Aapi: angular.noop,
}));
