angular.module('ovh-api-services').service('OvhApiTelephonyLinePhonePhonebook', $injector => ({
  v6() {
    return $injector.get('OvhApiTelephonyLinePhonePhonebookV6');
  },
  PhonebookContact() {
    return $injector.get('OvhApiTelephonyLinePhonePhonebookPhonebookContact');
  },
}));
