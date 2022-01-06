angular.module('ovh-api-services').service('OvhApiTelephonyLinePhone', ($injector) => ({
  v6() {
    return $injector.get('OvhApiTelephonyLinePhoneV6');
  },
  Aapi: angular.noop,
  FunctionKey() {
    return $injector.get('OvhApiTelephonyLineFunctionPhone');
  },
  Phonebook() {
    return $injector.get('OvhApiTelephonyLinePhonePhonebook');
  },
  RMA() {
    return $injector.get('OvhApiTelephonyLinePhoneRMA');
  },
}));
