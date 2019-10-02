angular.module('ovh-api-services').service('OvhApiTelephonyPhonebook', ($injector) => ({
  v6() {
    return $injector.get('OvhApiTelephonyPhonebookV6');
  },
  PhonebookContact() {
    return $injector.get('OvhApiTelephonyPhonebookPhonebookContact');
  },
}));
