angular.module('ovh-api-services').service('OvhApiTelephonyLinePhonePhonebookPhonebookContact', ($injector) => ({
  v6() {
    return $injector.get('OvhApiTelephonyLinePhonePhonebookPhonebookContactV6');
  },
}));
